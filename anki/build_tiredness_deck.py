#!/usr/bin/env python3
"""Generate an Anki .apkg deck for the Phase 1B CSI 'Tiredness' case.

Covers every fact in raw/pdfs/1. Mina Shahnawaz - Tiredness.pdf using two
note types: Basic (Q/A) and Cloze. Cards are grouped into subdecks.
"""
import genanki

# Stable IDs (fixed so re-imports update rather than duplicate the deck/models).
DECK_ID = 1980551234
BASIC_MODEL_ID = 1980551235
CLOZE_MODEL_ID = 1980551236

TAG = "Phase1B_CSI::Tiredness"

basic_model = genanki.Model(
    BASIC_MODEL_ID,
    "CSI Basic (Q/A)",
    fields=[{"name": "Front"}, {"name": "Back"}, {"name": "Source"}],
    templates=[
        {
            "name": "Card 1",
            "qfmt": '<div class="q">{{Front}}</div>',
            "afmt": '{{FrontSide}}<hr id="answer"><div class="a">{{Back}}</div>'
                    '<div class="src">{{Source}}</div>',
        }
    ],
    css="""
.card { font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 19px;
        color: #1c2733; background: #ffffff; text-align: left; padding: 14px 18px; }
.q { font-weight: 600; }
.a { margin-top: 6px; }
.a ul { margin: 4px 0; padding-left: 20px; }
hr#answer { border: none; border-top: 2px solid #0b6e8f; margin: 10px 0; }
.src { margin-top: 14px; color: #8494a2; font-size: 12px; }
b, strong { color: #0b6e8f; }
""",
)

cloze_model = genanki.Model(
    CLOZE_MODEL_ID,
    "CSI Cloze",
    model_type=genanki.Model.CLOZE,
    fields=[{"name": "Text"}, {"name": "Extra"}, {"name": "Source"}],
    templates=[
        {
            "name": "Cloze",
            "qfmt": "{{cloze:Text}}",
            "afmt": '{{cloze:Text}}<br><div class="extra">{{Extra}}</div>'
                    '<div class="src">{{Source}}</div>',
        }
    ],
    css="""
.card { font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 19px;
        color: #1c2733; background: #ffffff; text-align: left; padding: 14px 18px; }
.cloze { font-weight: 700; color: #0b6e8f; }
.extra { margin-top: 8px; color: #40515f; font-size: 15px; }
.src { margin-top: 14px; color: #8494a2; font-size: 12px; }
""",
)

SRC = "Mina Shahnawaz – Tiredness (CSI case), Phase 1B"

# --------------------------------------------------------------------------
# Basic Q/A cards: (subdeck, front, back)
# --------------------------------------------------------------------------
basic = [
    # ---- Pre-Reading ----
    ("Pre-Reading",
     "Describe three common causes of tiredness.",
     "<ul><li>Not getting enough sleep / difficulty getting enough sleep (insomnia)</li>"
     "<li>An unhealthy lifestyle (e.g. poor diet, lack of exercise)</li>"
     "<li>Stress, depression and dealing with life challenges (e.g. bereavement, looking after a new baby)</li>"
     "<li>Hormonal changes (e.g. puberty, pregnancy, menopause)</li>"
     "<li>Illnesses (e.g. glandular fever, COVID-19)</li>"
     "<li>Medical treatments/medicines (e.g. chemotherapy)</li></ul>"),
    ("Pre-Reading",
     "Recall conditions which may cause tiredness (name three).",
     "<ul><li>Sleep apnoea</li><li>Iron deficiency anaemia</li><li>Diabetes</li>"
     "<li>Overactive thyroid (hyperthyroidism)</li>"
     "<li>Myalgic encephalomyelitis / chronic fatigue syndrome (ME/CFS)</li></ul>"),
    ("Pre-Reading",
     "Recall ways to <b>improve</b> symptoms of tiredness/fatigue (things to do).",
     "<ul><li>Have a healthy diet / exercise regularly</li>"
     "<li>Sleep at the same time — aim for 6–9 hours</li>"
     "<li>Relax a couple of hours before sleep time</li>"
     "<li>Create a relaxing sleep environment (quiet, dark, warm)</li></ul>"),
    ("Pre-Reading",
     "Recall ways to <b>alleviate</b> symptoms of tiredness/fatigue (things to avoid).",
     "<ul><li>Do not smoke</li><li>Do not drink too much alcohol</li>"
     "<li>Do not eat, have caffeine or exercise in the hours leading to sleep</li>"
     "<li>Do not use smartphones or screens in the hour before sleep</li></ul>"),

    # ---- Fatigue definitions & epidemiology ----
    ("Fatigue & Epidemiology",
     "What is the difference between tiredness and fatigue?",
     "<b>Tiredness</b> is a general symptom that almost all of us experience. "
     "<b>Fatigue</b> refers to the long-term effects of tiredness not being resolved by sleep."),
    ("Fatigue & Epidemiology",
     "Roughly what percentage of all GP consultations are due to fatigue?",
     "Roughly <b>7%</b>."),
    ("Fatigue & Epidemiology",
     "To the nearest 10%, what percentage of patients presenting to a GP with fatigue have a diagnosis made?",
     "<b>~66%</b>."),
    ("Fatigue & Epidemiology",
     "To the nearest 10%, what percentage of patients presenting to a GP with fatigue have a condition detected on blood tests?",
     "<b>&lt;10%</b>."),
    ("Fatigue & Epidemiology",
     "Recall seven conditions that could be possible causes of fatigue.",
     "<ul><li>Anaemia</li><li>Sleep apnoea</li><li>Underactive thyroid (hypothyroidism)</li>"
     "<li>Coeliac disease</li><li>Chronic fatigue syndrome</li><li>Diabetes</li>"
     "<li>Glandular fever</li><li>Depression</li><li>Restless legs syndrome</li>"
     "<li>Anxiety</li><li>Malignancy</li><li>Vitamin D deficiency</li>"
     "<li>Heart failure</li><li>Infection</li><li>Lupus</li></ul>"),
    ("Fatigue & Epidemiology",
     "How can we make a differential diagnosis for symptoms of fatigue/tiredness?",
     "<ul><li>Asking questions on the <b>frequency and severity</b> of the symptoms is often very helpful</li>"
     "<li>This helps us understand how much the patient is being affected</li>"
     "<li>Understand which conditions to rule out by asking other system-related questions and conducting tests (e.g. bloods)</li></ul>"),

    # ---- HPT axis / primary hypothyroidism ----
    ("Thyroid: HPT Axis",
     "Explain why primary hypothyroidism produces high TSH with low T3/T4.",
     "<ul><li>Physiologically, TRH (hypothalamus) causes TSH release from the anterior pituitary</li>"
     "<li>TSH causes T3 and T4 release from the thyroid; T3/T4 act on the anterior pituitary and hypothalamus to stop making more TRH and TSH (negative feedback)</li>"
     "<li>In hypothyroidism, TSH is released but T3/T4 aren't released adequately</li>"
     "<li>The negative feedback fails: T3 isn't telling the hypothalamus to stop, so TRH/TSH keep being secreted</li>"
     "<li>Result: high TSH remains in the bloodstream with low T3/T4</li></ul>"),
    ("Thyroid: HPT Axis",
     "In the HPT axis, what does TRH (from the hypothalamus) stimulate?",
     "TRH causes <b>TSH</b> to be released from the <b>anterior pituitary</b>."),
    ("Thyroid: HPT Axis",
     "In the HPT axis, what does TSH stimulate, and how is the loop switched off?",
     "TSH causes the thyroid to release <b>T3 and T4</b>. T3 and T4 act back on the anterior pituitary and "
     "hypothalamus to stop making more TRH and TSH (negative feedback)."),

    # ---- Hashimoto's ----
    ("Hashimoto's Disease",
     "What is TPO, and what is its physiological role?",
     "<b>TPO = thyroid peroxidase</b>, the enzyme used to produce MIT and DIT in the production of T3/T4. "
     "The TPO antigen is present in the thyroid gland of all healthy individuals."),
    ("Hashimoto's Disease",
     "Describe the sequence of immune events in Hashimoto's disease.",
     "<ul><li>The TPO antigen is recognised as foreign and an immune response is elicited against it</li>"
     "<li>An APC presents MHC II (with the TPO antigen), which interacts with the TCR on T cells</li>"
     "<li>Co-stimulation via the T cell's CD28 and the B7 ligand on the APC helps activate the T cell</li>"
     "<li>The T cell presents CD40L, which stimulates B cells by interacting with the CD40 receptor on B cells</li>"
     "<li>B cells recognise CD40L → induces production of the anti-TPO antibody, which attacks the thyroid</li>"
     "<li>B cells can also act as APCs (alternative pathway)</li></ul>"),
    ("Hashimoto's Disease",
     "In Hashimoto's, which co-stimulatory receptor/ligand pair helps activate the T cell?",
     "The T cell's <b>CD28</b> receptor and the <b>B7</b> ligand on the APC."),
    ("Hashimoto's Disease",
     "In Hashimoto's, how does the activated T cell stimulate B cells to make anti-TPO antibody?",
     "The T cell presents <b>CD40L</b>, which interacts with the <b>CD40 receptor</b> on B cells; B cells "
     "recognise CD40L, which induces production of the <b>anti-TPO antibody</b>."),

    # ---- Immune tolerance (Phase 1A recap) ----
    ("Immune Tolerance",
     "What prevents immune cells from attacking host cells physiologically?",
     "<ul><li>The presence of <b>PAMPs</b> helps cells differentiate between pathogens and self cells</li>"
     "<li>Mechanisms within central and peripheral tolerance (e.g. AIRE and affinity maturation) ensure self-attacking cells are destroyed before release into circulation</li></ul>"),
    ("Immune Tolerance",
     "What is the difference between central and peripheral tolerance?",
     "<b>Central tolerance</b> occurs <b>before</b> B and T cells are secreted into circulation. "
     "<b>Peripheral tolerance</b> occurs <b>after</b> B and T cells are secreted into circulation."),
    ("Immune Tolerance",
     "What happens in central tolerance?",
     "Cells that could be destructive against 'self'/human antigens (and cause potential damage) are "
     "deleted and destroyed before entering into circulation."),
    ("Immune Tolerance",
     "Describe how central tolerance works in B cell selection.",
     "<ul><li>Differentiated B cells in the bone marrow patrol for self antigens</li>"
     "<li>If a B cell receptor recognises a self antigen, the bone marrow destroys it before it is released into the bloodstream</li></ul>"),
    ("Immune Tolerance",
     "Describe how central tolerance works in T cell selection.",
     "<ul><li>T cells unable to bind MHCs, or that bind MHCs too strongly, are removed from the thymus and not released into circulation</li>"
     "<li>AIREs (Autoimmune Regulators) are transcription factors in the thymus that express the genes of peripheral tissue antigens</li>"
     "<li>Expressing these genes lets us see which T cells recognise the self-antigens and destroy them accordingly</li></ul>"),
    ("Immune Tolerance",
     "Why is central tolerance for B cells simpler than for T cells?",
     "<ul><li>B cells bind antigens that are free in circulation, so whether or not this happens in the bone marrow can be used to select between B cells</li>"
     "<li>T cells only bind antigens presented on MHC molecules, which makes selection more difficult</li></ul>"),
    ("Immune Tolerance",
     "How can mutations in AIRE affect hosts?",
     "<ul><li>AIRE can no longer produce the self-antigens</li>"
     "<li>This causes a lack of adequate T cell selection — the thymus no longer knows which T cells attack self-antigens</li>"
     "<li>Results in multi-organ autoimmunity</li></ul>"),
    ("Immune Tolerance",
     "How is peripheral tolerance useful?",
     "If any T or B cells that attack self antigens slip through central tolerance by accident, they can be destroyed via peripheral tolerance."),
    ("Immune Tolerance",
     "What is affinity maturation, and where does it occur?",
     "<ul><li>A process where a B cell receptor produces antibodies that bind a pathogen much better after repeated exposure</li>"
     "<li>The BCR is constantly modified to produce slightly different antibodies, and the lymph nodes select those best fit for the antigens</li>"
     "<li>Occurs in <b>germinal centres</b></li></ul>"),
    ("Immune Tolerance",
     "What is a consequence of affinity maturation?",
     "The modification of the antibodies can lead to certain B cells recognising self antigens and attacking self cells."),
    ("Immune Tolerance",
     "Describe how anergy works in peripheral tolerance.",
     "<ul><li>The MHC on the surface of host cells doesn't contain the necessary stimulatory molecules to activate naive T cells</li>"
     "<li>So self-attacking T cells aren't activated and are less likely to be activated in future</li></ul>"),
    ("Immune Tolerance",
     "Describe how ignorance works in peripheral tolerance.",
     "<ul><li>The concentration of a self antigen is too low for T cells to be destroyed (they are ignored)</li>"
     "<li>Happens in immunologically privileged areas (e.g. CNS, eye, brain) where the risk of autoimmunity is greater than the risk of actual infection</li></ul>"),
    ("Immune Tolerance",
     "Describe how positive selection in B/T cell differentiation works.",
     "It determines whether a B/T cell can detect antigens using its BCR/TCR (its primary function). "
     "If it cannot, it has developed abnormally and undergoes apoptosis."),
    ("Immune Tolerance",
     "Describe how negative selection in B/T cell differentiation works.",
     "It determines whether a B/T cell has BCRs/TCRs that react against self (host cell) antigens. "
     "We don't want self-reactive B/T cells, so they undergo apoptosis."),
    ("Immune Tolerance",
     "Describe the role of T-regulatory cells (Tregs) in self-tolerance.",
     "<ul><li>Tregs are essential for maintaining immune homeostasis and tolerance, preventing autoimmune diseases, and regulating immune responses</li>"
     "<li>Their ability to suppress excessive immune activity is critical for self-tolerance</li>"
     "<li>They play significant roles in cancer, transplantation, and infectious diseases</li></ul>"),

    # ---- Post-Session: hypothyroidism ----
    ("Hypothyroidism",
     "Recall causes of hypothyroidism (name five).",
     "<ul><li>Autoimmune thyroid disease (e.g. Hashimoto's)</li>"
     "<li>Radioactive iodine treatment</li><li>Antithyroid drugs</li>"
     "<li>Medicines such as lithium and amiodarone</li>"
     "<li>Cough medicines with large amounts of iodine</li>"
     "<li>Some foods taken in excess (e.g. kelp/seaweed)</li>"
     "<li>Pituitary malfunction</li>"
     "<li>Radiation for head and neck cancers (uncommon in the UK)</li>"
     "<li>Congenital hypothyroidism</li></ul>"),
    ("Hypothyroidism",
     "What is lithium used for?",
     "Lithium is commonly used to treat some <b>mental health problems</b> (and can cause hypothyroidism)."),
    ("Hypothyroidism",
     "What is amiodarone used for?",
     "Amiodarone is commonly used to treat some <b>heart problems</b> (and can cause hypothyroidism)."),
    ("Hypothyroidism",
     "Recall symptoms of hypothyroidism (name seven).",
     "<ul><li>Fatigue and tiredness</li><li>Cold intolerance (increased awareness of cold)</li>"
     "<li>Dry and coarse skin</li><li>Dry and thinning hair</li><li>Hoarse or croaky voice</li>"
     "<li>Constipation</li><li>Muscle weakness, cramps and aches</li>"
     "<li>Pins and needles in the fingers/hands (carpal tunnel syndrome)</li>"
     "<li>Heavier and longer periods</li><li>Fertility problems</li><li>Low libido</li>"
     "<li>Weight gain</li><li>Puffy face and bags under the eyes</li>"
     "<li>Slow speech, movements and thoughts</li><li>Low mood or depression</li>"
     "<li>Memory problems</li><li>Difficulty concentrating</li>"
     "<li>Slow heart beat (bradycardia)</li><li>Slightly raised blood pressure (hypertension)</li>"
     "<li>Raised cholesterol</li></ul>"),
]

# --------------------------------------------------------------------------
# Cloze cards: (subdeck, text_with_cloze, extra)
# --------------------------------------------------------------------------
cloze = [
    ("Fatigue & Epidemiology",
     "{{c1::Tiredness}} is a general symptom that almost all of us experience, whereas "
     "{{c2::fatigue}} is the long-term effect of tiredness {{c3::not being resolved by sleep}}.",
     ""),
    ("Fatigue & Epidemiology",
     "Roughly {{c1::7%}} of all GP consultations are due to fatigue.",
     ""),
    ("Fatigue & Epidemiology",
     "Of patients presenting to a GP with fatigue, ~{{c1::66%}} have a diagnosis made, "
     "but {{c2::<10%}} have a condition detected on blood tests.",
     "History (frequency/severity) matters more than early bloods."),
    ("Thyroid: HPT Axis",
     "HPT axis: {{c1::TRH}} from the hypothalamus → {{c2::TSH}} from the anterior pituitary → "
     "{{c3::T3 and T4}} from the thyroid. T3/T4 provide {{c4::negative}} feedback on the pituitary and hypothalamus.",
     ""),
    ("Thyroid: HPT Axis",
     "In primary hypothyroidism the thyroid can't release adequate T3/T4, so negative feedback is lost and "
     "TRH/TSH keep being secreted — giving {{c1::high}} TSH with {{c2::low}} T3/T4.",
     ""),
    ("Hashimoto's Disease",
     "TPO ({{c1::thyroid peroxidase}}) is the enzyme used to produce {{c2::MIT and DIT}} in the production of T3/T4.",
     ""),
    ("Hashimoto's Disease",
     "In Hashimoto's, an {{c1::APC}} presents {{c2::MHC II}} with the TPO antigen to the {{c3::TCR}} on a T cell; "
     "co-stimulation is via the T cell's {{c4::CD28}} and the {{c5::B7}} ligand on the APC.",
     ""),
    ("Hashimoto's Disease",
     "The activated T cell presents {{c1::CD40L}}, which binds the {{c2::CD40}} receptor on B cells and induces "
     "production of the {{c3::anti-TPO antibody}} that attacks the thyroid.",
     "B cells can also act as APCs."),
    ("Immune Tolerance",
     "{{c1::Central}} tolerance occurs before B and T cells enter circulation; {{c2::peripheral}} tolerance occurs after.",
     ""),
    ("Immune Tolerance",
     "In B cell central tolerance, if a B cell receptor recognises a {{c1::self antigen}} in the {{c2::bone marrow}}, "
     "it is destroyed before release into the bloodstream.",
     ""),
    ("Immune Tolerance",
     "In T cell central tolerance, T cells that {{c1::can't bind MHC}} or {{c2::bind MHC too strongly}} are removed from the {{c3::thymus}}.",
     ""),
    ("Immune Tolerance",
     "{{c1::AIRE}} (Autoimmune Regulators) are transcription factors that make the thymus express genes of "
     "{{c2::peripheral tissue antigens}}, so self-reactive T cells can be recognised and destroyed. Mutations cause {{c3::multi-organ autoimmunity}}.",
     ""),
    ("Immune Tolerance",
     "Central tolerance is simpler for {{c1::B}} cells because they bind free antigens, whereas {{c2::T}} cells "
     "only bind antigens presented on {{c3::MHC}} molecules.",
     ""),
    ("Immune Tolerance",
     "{{c1::Affinity maturation}} occurs in {{c2::germinal centres}}: the BCR is modified to produce antibodies that "
     "bind a pathogen better after repeated exposure; a consequence is that some B cells may recognise {{c3::self antigens}}.",
     ""),
    ("Immune Tolerance",
     "In {{c1::anergy}}, host-cell MHC lacks the {{c2::co-stimulatory}} molecules needed to activate naive T cells, "
     "so self-reactive T cells are not activated.",
     ""),
    ("Immune Tolerance",
     "In {{c1::ignorance}}, the self-antigen concentration is {{c2::too low}} to trigger T cell destruction; it occurs "
     "in {{c3::immunologically privileged}} areas (e.g. CNS, eye, brain).",
     ""),
    ("Immune Tolerance",
     "{{c1::Positive}} selection checks a cell can detect antigen via its BCR/TCR; {{c2::negative}} selection checks it "
     "does not react against self. Failures undergo {{c3::apoptosis}}.",
     ""),
    ("Immune Tolerance",
     "{{c1::T regulatory cells (Tregs)}} maintain immune homeostasis and self-tolerance by {{c2::suppressing excessive immune activity}}.",
     ""),
    ("Hypothyroidism",
     "Drug causes of hypothyroidism include {{c1::lithium}} (used for mental health problems) and {{c2::amiodarone}} (used for heart problems).",
     ""),
    ("Hypothyroidism",
     "Autoimmune thyroid disease causing hypothyroidism is typified by {{c1::Hashimoto's}} disease.",
     ""),
    ("Hypothyroidism",
     "Hypothyroidism symptoms reflect a 'slowing down': {{c1::cold intolerance}}, {{c2::constipation}}, "
     "{{c3::bradycardia}}, weight gain, and slow speech/movement/thought.",
     "Also: dry skin/hair, hoarse voice, carpal tunnel, low mood, raised cholesterol."),
]

deck = genanki.Deck(DECK_ID, "Phase 1B CSI::1 - Tiredness")

for sub, front, back in basic:
    deck.add_note(genanki.Note(
        model=basic_model,
        fields=[front, back, SRC],
        tags=[TAG, sub.replace(" ", "_").replace("&", "and").replace(":", "").replace("'", "")],
    ))

for sub, text, extra in cloze:
    deck.add_note(genanki.Note(
        model=cloze_model,
        fields=[text, extra, SRC],
        tags=[TAG, sub.replace(" ", "_").replace("&", "and").replace(":", "").replace("'", "")],
    ))

genanki.Package(deck).write_to_file("anki/CSI-1-Tiredness.apkg")

n_cloze_cards = sum(t.count("{{c") if False else len(set(
    __import__("re").findall(r"{{c(\d+)::", text))) for _, text, _ in cloze)
print(f"Basic notes: {len(basic)}")
print(f"Cloze notes: {len(cloze)} (≈{n_cloze_cards} cloze cards)")
print("Wrote anki/CSI-1-Tiredness.apkg")
