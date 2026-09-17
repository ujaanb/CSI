#!/usr/bin/env python3
"""Inject the auth.js <script> tag into the <head> of every real HTML page.

Idempotent: re-running makes no change. Pure redirect stubs (pages whose only
job is a <meta http-equiv="refresh">) are skipped.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SCRIPT_PATH = os.path.join("Outcomes", "auth.js")
MARKER = "auth.js"


def html_files():
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in {".git", "raw", "anki", "docs"}]
        for name in sorted(filenames):
            if name.endswith(".html"):
                yield os.path.join(dirpath, name)


def rel_to_script(page):
    rel = os.path.relpath(os.path.join(ROOT, SCRIPT_PATH), os.path.dirname(page))
    return rel.replace(os.sep, "/")


def main():
    injected, skipped, already = [], [], []
    for page in html_files():
        # newline="" keeps the file's existing CRLF/LF terminators untouched.
        with open(page, encoding="utf-8", newline="") as handle:
            text = handle.read()
        eol = "\r\n" if "\r\n" in text else "\n"
        label = os.path.relpath(page, ROOT)

        if re.search(r'<meta[^>]+http-equiv=["\']refresh["\']', text, re.I):
            skipped.append(label + " (redirect stub)")
            continue
        if re.search(r'<script[^>]+src=["\'][^"\']*' + MARKER, text, re.I):
            already.append(label)
            continue

        tag = '<script src="%s"></script>%s' % (rel_to_script(page), eol)
        new, count = re.subn(r"(?i)(<meta charset=[^>]*>[ \t]*\r?\n)", lambda m: m.group(1) + tag, text, count=1)
        if count == 0:
            new, count = re.subn(r"(?i)(<head[^>]*>[ \t]*\r?\n)", lambda m: m.group(1) + tag, text, count=1)
        if count == 0:
            print("!! no <head> anchor found in " + label, file=sys.stderr)
            continue

        with open(page, "w", encoding="utf-8", newline="") as handle:
            handle.write(new)
        injected.append(label)

    for group, name in ((injected, "injected"), (already, "already present"), (skipped, "skipped")):
        for item in group:
            print("%-16s %s" % (name, item))


if __name__ == "__main__":
    main()
