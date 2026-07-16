/* Phase 1B CSI — Practice Questions bank
   Focus: application, inference, clinical reasoning (not pure recall).
   Each item: { id, topic, q, choices, answer, explain }
   answer = index of correct choice (0–3)
*/
window.CSI_PRACTICE = {
  topics: [
    { id: "tiredness", label: "1 · Tiredness", short: "Tiredness" },
    { id: "emergency", label: "2 · Bill — Emergency", short: "Emergency" },
    { id: "lowmood", label: "3 · Amy Carter — Low Mood", short: "Low Mood" },
    { id: "breathlessness", label: "4 · Phillip Craven — Breathlessness", short: "Breathlessness" },
    { id: "abdominal", label: "5 · Anna Taylor — Abdominal Pain", short: "Abdominal Pain" },
    { id: "backpain", label: "6 · Paul Bennett — Back Pain", short: "Back Pain" },
    { id: "diarrhoea", label: "7 · Lucy Allen — Diarrhoea", short: "Diarrhoea" },
    { id: "crohns", label: "8 · Lucy Benjamin — Crohn's Complications", short: "Crohn's Complications" },
  ],

  questions: [

    /* ========== 1 TIREDNESS ========== */
    {
      id: "t01", topic: "tiredness",
      q: "A 45-year-old woman reports feeling 'exhausted' for 4 months. She still enjoys hobbies but needs more rest after work. How does this most usefully distinguish tiredness from pathological fatigue in the CSI framework?",
      choices: [
        "Duration over 3 months always means fatigue",
        "Tiredness is effort-related and improves with rest; fatigue is a persistent lack of energy not fully explained by exertion alone",
        "Tiredness is psychological; fatigue is always organic",
        "They are clinically interchangeable terms"
      ],
      answer: 1,
      explain: "CSI distinguishes tiredness (effort-related, rest-responsive) from fatigue as a more persistent energy deficit. Duration alone or 'psychological vs organic' is too crude."
    },
    {
      id: "t02", topic: "tiredness",
      q: "Bloods show high TSH and low free T4. Which inference about the HPT axis is most accurate?",
      choices: [
        "The pituitary is overproducing TSH because the thyroid is overactive",
        "Low thyroid hormone removes negative feedback, so TSH rises — consistent with primary hypothyroidism",
        "High TSH always means secondary hypothyroidism",
        "Free T4 is low because TSH is suppressing the thyroid"
      ],
      answer: 1,
      explain: "Primary hypothyroidism: thyroid fails → T4 falls → loss of negative feedback → TSH rises. Secondary would typically show low/normal TSH with low T4."
    },
    {
      id: "t03", topic: "tiredness",
      q: "Anti-TPO antibodies are strongly positive in a fatigued patient with raised TSH. What does this most strongly support about mechanism?",
      choices: [
        "An infectious thyroiditis caused by bacteria attacking TPO",
        "Autoimmune attack on thyroid peroxidase contributing to Hashimoto-type hypothyroidism",
        "A drug reaction to lithium only",
        "Pituitary autoimmunity causing TSH deficiency"
      ],
      answer: 1,
      explain: "Anti-TPO antibodies mark autoimmune thyroiditis (Hashimoto's). They do not indicate bacterial infection or pituitary autoimmunity."
    },
    {
      id: "t04", topic: "tiredness",
      q: "Why does failure of central tolerance (e.g. impaired AIRE-related thymic selection) increase risk of autoimmune thyroid disease?",
      choices: [
        "It increases circulating free T4 directly",
        "Self-reactive T cells that should have been deleted may survive and later attack thyroid antigens",
        "It blocks antibody production entirely",
        "It only affects B cells in the bone marrow"
      ],
      answer: 1,
      explain: "Central tolerance deletes self-reactive clones in the thymus. If this fails, autoreactive T cells can persist and drive autoimmunity against thyroid antigens."
    },
    {
      id: "t05", topic: "tiredness",
      q: "A patient on long-term lithium develops fatigue and raised TSH. Which application of CSI knowledge is best?",
      choices: [
        "Stop all psychiatric medication immediately without review",
        "Recognise lithium as a possible iatrogenic contributor to hypothyroidism and investigate/manage thyroid status with the psychiatric team",
        "Assume the TSH rise is always harmless",
        "Treat as Graves' disease first-line"
      ],
      answer: 1,
      explain: "Lithium can impair thyroid function. The correct clinical move is to recognise the drug–thyroid link and coordinate investigation/management, not abrupt unsupervised withdrawal."
    },
    {
      id: "t06", topic: "tiredness",
      q: "Amiodarone is started for arrhythmia. Months later TSH is abnormal. Why is thyroid monitoring particularly relevant?",
      choices: [
        "Amiodarone contains iodine and can disrupt thyroid hormone synthesis/metabolism in either direction",
        "Amiodarone only ever causes hyperthyroidism",
        "Amiodarone blocks TSH receptors permanently",
        "Amiodarone has no thyroid effects"
      ],
      answer: 0,
      explain: "Amiodarone is iodine-rich and can cause hypo- or hyperthyroidism via several mechanisms — hence monitoring thyroid function is clinically important."
    },
    {
      id: "t07", topic: "tiredness",
      q: "Affinity maturation improves antibody quality over time. In Hashimoto's, how does this concept help explain progressive thyroid damage?",
      choices: [
        "Antibodies become less specific, so they stop attacking the thyroid",
        "Repeated antigen exposure can select B-cell clones with higher-affinity autoantibodies that more effectively damage thyroid tissue",
        "Affinity maturation only occurs in bacterial infections",
        "It lowers TSH independently of antibodies"
      ],
      answer: 1,
      explain: "Affinity maturation selects higher-affinity antibodies. In autoimmunity, that can mean more effective (damaging) autoantibodies against thyroid antigens over time."
    },
    {
      id: "t08", topic: "tiredness",
      q: "A fatigued patient has normal TFTs. Which reasoning is most appropriate?",
      choices: [
        "Fatigue cannot be organic if TFTs are normal",
        "Normal TFTs exclude hypothyroidism but do not exclude other causes on the fatigue differential — continue a structured work-up",
        "Always start thyroxine empirically",
        "High anti-TPO alone always means treatable hypothyroidism"
      ],
      answer: 1,
      explain: "Normal TFTs make primary hypothyroidism unlikely but fatigue has a wide differential; CSI emphasises structured, not thyroid-only, reasoning."
    },
    {
      id: "t09", topic: "tiredness",
      q: "Regulatory T cells help maintain peripheral tolerance. If Treg function is impaired, which outcome is most plausible?",
      choices: [
        "Reduced risk of autoimmunity",
        "Increased chance that autoreactive responses against tissues like the thyroid escape regulation",
        "Complete inability to mount any immune response",
        "Immediate anaphylaxis to every antigen"
      ],
      answer: 1,
      explain: "Tregs restrain autoreactive responses. Impaired Treg function favours escape of autoimmunity rather than universal immunodeficiency."
    },
    {
      id: "t10", topic: "tiredness",
      q: "A GP wants a 'first-pass' approach to fatigue. Which application best matches CSI teaching?",
      choices: [
        "Order every specialist test on day one",
        "Clarify tiredness vs fatigue, screen for red flags and common reversible causes (including thyroid), then escalate based on findings",
        "Assume depression in all women under 50",
        "Start steroids for possible Hashimoto's without labs"
      ],
      answer: 1,
      explain: "Good practice is structured: clarify the symptom, look for red flags/common causes (TFTs included), then investigate further as indicated."
    },
    {
      id: "t11", topic: "tiredness",
      q: "High TSH with high free T4 would be unexpected in uncomplicated primary hypothyroidism. What alternative inference might you consider?",
      choices: [
        "Classic primary hypothyroidism",
        "Possible secondary/tertiary pathology, assay interference, or a different thyroid disorder — not the classic primary hypo pattern",
        "Proof of Hashimoto's alone",
        "Normal physiological variation only"
      ],
      answer: 1,
      explain: "Primary hypo = high TSH + low T4. High TSH + high T4 breaks that pattern and needs another explanation."
    },
    {
      id: "t12", topic: "tiredness",
      q: "Why might a patient with Hashimoto's feel cold, gain weight, and become constipated?",
      choices: [
        "Excess T4 increases metabolic rate",
        "Reduced thyroid hormone slows metabolic processes, reducing heat generation and gut motility",
        "Anti-TPO antibodies directly cool the skin",
        "TSH itself causes constipation via the colon"
      ],
      answer: 1,
      explain: "Hypothyroid physiology: low T3/T4 slows metabolism → cold intolerance, weight gain tendency, constipation — not excess T4 effects."
    },

    /* ========== 2 EMERGENCY ========== */
    {
      id: "e01", topic: "emergency",
      q: "A drowsy trauma patient scores GCS 7. Why is airway management the priority over detailed neurological examination?",
      choices: [
        "Neurology is irrelevant in trauma",
        "GCS <8 implies high risk of airway compromise; ABCDE prioritises securing a patent airway before finer disability assessment",
        "GCS 7 always means hypoglycaemia only",
        "You must complete Exposure before Airway"
      ],
      answer: 1,
      explain: "ABCDE is hierarchical. Low GCS threatens airway protection; intubation threshold is often taught around GCS <8."
    },
    {
      id: "e02", topic: "emergency",
      q: "A patient can speak in full sentences but has a RR of 32 and SpO₂ 88% on air. Which ABCDE step is currently most critical?",
      choices: [
        "Airway — they cannot speak so airway is failed",
        "Breathing — speech suggests airway patency, but oxygenation/ventilation are failing",
        "Disability only",
        "Exposure first to find rashes"
      ],
      answer: 1,
      explain: "Able speech ≈ patent airway. Tachypnoea and hypoxia point to a Breathing problem."
    },
    {
      id: "e03", topic: "emergency",
      q: "Tracheal deviation away from a silent, hyper-resonant hemithorax in a shocked patient most strongly suggests which pathophysiology?",
      choices: [
        "Simple consolidation only",
        "Tension pneumothorax causing obstructive physiology",
        "Left ventricular failure alone",
        "Asthma without air trapping"
      ],
      answer: 1,
      explain: "Contralateral tracheal deviation + hyper-resonance + shock fits tension pneumothorax — an obstructive shock cause."
    },
    {
      id: "e04", topic: "emergency",
      q: "CRT is 5 seconds, hands are cold and mottled, BP is still 110/70. What is the best interpretation?",
      choices: [
        "Normal circulation because BP is normal",
        "Compensated shock may preserve BP while peripheral perfusion is already impaired",
        "CRT is meaningless in adults",
        "This proves distributive shock only"
      ],
      answer: 1,
      explain: "CSI notes BP can be maintained by compensation even when perfusion (CRT, mottling) is failing — do not wait for hypotension."
    },
    {
      id: "e05", topic: "emergency",
      q: "Lactate is 4.2 mmol/L in a hypotensive patient. What does this imply about tissue metabolism?",
      choices: [
        "Aerobic metabolism is sufficient everywhere",
        "Oxygen delivery is likely inadequate, driving anaerobic glycolysis and lactate production",
        "Lactate only reflects liver failure",
        "It proves pulmonary embolism specifically"
      ],
      answer: 1,
      explain: "Elevated lactate (>~2 mmol/L) is a marker of tissue hypoperfusion/anaerobic metabolism — useful but not diagnosis-specific."
    },
    {
      id: "e06", topic: "emergency",
      q: "A septic patient needs the Sepsis Six. Which reasoning best justifies taking blood cultures before antibiotics when delay is minimal?",
      choices: [
        "Antibiotics never work without cultures",
        "Cultures identify the organism to guide therapy; antibiotics still must not be delayed beyond the urgent care window",
        "Cultures replace the need for fluids",
        "Oxygen is optional if cultures are sent"
      ],
      answer: 1,
      explain: "Take cultures then give antibiotics promptly — cultures refine later therapy; they do not justify clinically harmful delay."
    },
    {
      id: "e07", topic: "emergency",
      q: "After 1 L crystalloid, BP remains low and the patient becomes more oedematous. What risk of fluid challenge is being demonstrated?",
      choices: [
        "No risk exists",
        "Excess fluid can cause tissue/pulmonary oedema if capillary leak or cardiac dysfunction is present",
        "Crystalloid always cures distributive shock",
        "Oedema proves the diagnosis was hypovolaemia only"
      ],
      answer: 1,
      explain: "Fluid challenges help perfusion but risk oedema — especially with leaky capillaries (sepsis) or heart failure."
    },
    {
      id: "e08", topic: "emergency",
      q: "Using VITAMIN CDEF, which category best covers 'iatrogenic opioid overdose causing respiratory depression'?",
      choices: [
        "Neoplastic",
        "Iatrogenic/Idiopathic",
        "Congenital",
        "Degenerative"
      ],
      answer: 1,
      explain: "Drug-induced harm from medical treatment sits under iatrogenic in the surgical sieve."
    },
    {
      id: "e09", topic: "emergency",
      q: "A patient has warm peripheries, low BP, and fever after pneumonia. Which shock category fits best and why?",
      choices: [
        "Hypovolaemic — pure blood loss",
        "Distributive (septic) — vasodilation and maldistribution of flow",
        "Cardiogenic — primary pump failure only",
        "Obstructive — PE until proven otherwise"
      ],
      answer: 1,
      explain: "Warm hypotensive septic picture is classic distributive/septic shock from vasodilation and inflammatory maldistribution."
    },
    {
      id: "e10", topic: "emergency",
      q: "Oliguria develops in shock. What does urine output tell you about the kidneys?",
      choices: [
        "Nothing useful",
        "It is a bedside marker of renal (and thus systemic) hypoperfusion and fluid balance",
        "Oliguria only means obstruction",
        "It confirms the need for immediate dialysis"
      ],
      answer: 1,
      explain: "Falling urine output is used as a perfusion/end-organ marker in the Sepsis Six and shock assessment."
    },
    {
      id: "e11", topic: "emergency",
      q: "Burns cause hypovolaemia even without massive external bleeding. Which mechanism is most important?",
      choices: [
        "Immediate pure water intoxication",
        "Loss of skin barrier plus inflammatory capillary leak (third-spacing) and vasodilation",
        "Only cardiac tamponade",
        "Only opioid toxicity"
      ],
      answer: 1,
      explain: "Burns destroy the barrier and drive capillary leak into tissues — plasma volume falls without classic external haemorrhage."
    },
    {
      id: "e12", topic: "emergency",
      q: "Severe sepsis is distinguished from sepsis in the CSI notes when hypotension…",
      choices: [
        "Never occurs",
        "Fails to resolve despite an adequate fluid challenge",
        "Is always caused by PE",
        "Only occurs if platelets are high"
      ],
      answer: 1,
      explain: "In these notes, severe sepsis adds failure of hypotension to respond to adequate fluids (moving toward septic shock physiology)."
    },
    {
      id: "e13", topic: "emergency",
      q: "A patient with opioid overdose is hypoventilating. Which Breathing intervention logic is sound?",
      choices: [
        "Give high-flow O₂ only and ignore ventilation",
        "Support ventilation and reverse opioids with naloxone while protecting the airway",
        "Immediate chest drain for all cases",
        "Ignore ABCDE because toxins are 'Disability only'"
      ],
      answer: 1,
      explain: "Opioids depress ventilation; naloxone reverses opioid effect, but airway/breathing support remains essential."
    },

    /* ========== 3 LOW MOOD ========== */
    {
      id: "m01", topic: "lowmood",
      q: "A student is sad for 3 days after an exam. Which DSM-oriented reasoning is most accurate?",
      choices: [
        "This meets full depression criteria automatically",
        "Short-lived low mood after a stressor is not the same as a depressive episode requiring key + total symptom thresholds over time",
        "Any sadness equals anhedonia",
        "ICD-11 and DSM never apply to students"
      ],
      answer: 1,
      explain: "CSI distinguishes transient low mood from depression needing persistent key symptoms (low mood/anhedonia) plus multiple other symptoms."
    },
    {
      id: "m02", topic: "lowmood",
      q: "A patient has anhedonia, insomnia, weight loss, guilt, and poor concentration for 6 weeks, but denies low mood. Can DSM criteria still be met?",
      choices: [
        "No — low mood is always mandatory as the only key symptom",
        "Yes — marked anhedonia can serve as a key symptom alongside sufficient total symptoms",
        "Only if they also have mania",
        "Only with an abnormal MRI"
      ],
      answer: 1,
      explain: "Key symptoms are persistent low mood OR anhedonia; diagnosis still needs enough total symptoms and duration."
    },
    {
      id: "m03", topic: "lowmood",
      q: "Why does an ACE score of 5 raise clinical concern beyond 'bad childhood memories'?",
      choices: [
        "ACEs prove a single genetic cause of depression",
        "Higher cumulative adversity correlates with higher risk of later mental and physical health problems",
        "ACE scores diagnose depression by themselves",
        "Only abuse counts; neglect does not"
      ],
      answer: 1,
      explain: "ACE scoring is cumulative risk: ≥4 is linked to substantially higher later health/mental health burden — not a standalone diagnosis."
    },
    {
      id: "m04", topic: "lowmood",
      q: "An SSRI is started. The patient asks why they feel worse in week 1. Best application of teaching?",
      choices: [
        "Stop immediately — SSRIs never work",
        "Warn that early worsening can occur; benefit often takes weeks; review urgently if suicidal thoughts escalate",
        "Double the dose on day 2",
        "Add an MAOI the same day"
      ],
      answer: 1,
      explain: "CSI counselling: delayed onset, possible early worsening, continue after remission, taper slowly, watch interactions — and safety-net suicide risk."
    },
    {
      id: "m05", topic: "lowmood",
      q: "SSRIs block SERT. How does that translate into a therapeutic idea?",
      choices: [
        "Serotonin is destroyed faster in the synapse",
        "Less reuptake → serotonin remains longer in the synaptic cleft, enhancing signalling",
        "They agonise every serotonin receptor directly",
        "They inhibit TPH to raise serotonin synthesis"
      ],
      answer: 1,
      explain: "SERT blockade reduces clearance of synaptic serotonin, prolonging its action — the core SSRI mechanism taught here."
    },
    {
      id: "m06", topic: "lowmood",
      q: "A trial shows p = 0.03 for a 0.2-point mood score change that patients cannot feel. What distinction matters?",
      choices: [
        "Statistical significance guarantees clinical importance",
        "The result may be statistically significant yet not clinically meaningful",
        "p-values measure bias only",
        "Clinical significance means p < 0.05"
      ],
      answer: 1,
      explain: "Statistical ≠ clinical significance. Tiny effects can be 'significant' statistically without mattering to patients."
    },
    {
      id: "m07", topic: "lowmood",
      q: "Combining an SSRI with an MAOI is dangerous primarily because…",
      choices: [
        "Both always cause hypothyroidism",
        "Excessive serotonergic activity can precipitate serotonin syndrome",
        "They cancel each other completely",
        "MAOI only affect dopamine in the synapse"
      ],
      answer: 1,
      explain: "Multiple serotonergic agents can cause life-threatening serotonin excess — a key counselling/contraindication point."
    },
    {
      id: "m08", topic: "lowmood",
      q: "Self-harm peaks in young women; suicide deaths peak in middle-aged men. What teaching point follows?",
      choices: [
        "Only one demographic needs mental health assessment",
        "Risk presentations differ by demographic — assessment must be tailored, not stereotype-blind or stereotype-only",
        "Men never self-harm",
        "Women never die by suicide"
      ],
      answer: 1,
      explain: "Epidemiology guides vigilance patterns but never replaces individual risk assessment."
    },
    {
      id: "m09", topic: "lowmood",
      q: "A biopsychosocial formulation lists job loss, hypothyroidism, and harsh self-criticism. Why is this better than a single-cause model?",
      choices: [
        "It proves medication is never needed",
        "Depression often has interacting social, biological and psychological contributors that all may need addressing",
        "It means CBT alone always cures",
        "Biological factors exclude psychotherapy"
      ],
      answer: 1,
      explain: "CSI emphasises multifactorial causation — treating only one domain may leave residual drivers of illness."
    },
    {
      id: "m10", topic: "lowmood",
      q: "MAO inhibitors raise synaptic serotonin by…",
      choices: [
        "Blocking SERT only",
        "Reducing intracellular breakdown of monoamines, altering gradients so more transmitter is available for signalling",
        "Destroying autoreceptors surgically",
        "Inhibiting CCK release"
      ],
      answer: 1,
      explain: "MAO breaks down monoamines; inhibiting MAO increases monoamine availability with antidepressant effects — distinct from SERT blockade."
    },
    {
      id: "m11", topic: "lowmood",
      q: "Placebo response is large in mild depression but drugs help more as severity rises. What implication for practice?",
      choices: [
        "Never use antidepressants",
        "Severity influences expected benefit of medication relative to non-drug approaches — matching treatment intensity to illness severity",
        "All depression is identical",
        "Placebo means the illness is fake"
      ],
      answer: 1,
      explain: "Severity-modulated treatment response supports stepped care rather than one-size-fits-all prescribing."
    },
    {
      id: "m12", topic: "lowmood",
      q: "TPH inhibitors would be expected to…",
      choices: [
        "Increase serotonin synthesis",
        "Reduce serotonin production by blocking the pathway to 5-HTP",
        "Act identically to SSRIs",
        "Cure serotonin syndrome"
      ],
      answer: 1,
      explain: "TPH produces 5-HTP (serotonin precursor); inhibiting it lowers serotonin synthesis — opposite direction to antidepressant strategies that raise synaptic 5-HT."
    },

    /* ========== 4 BREATHLESSNESS ========== */
    {
      id: "b01", topic: "breathlessness",
      q: "In emphysema, loss of elastin leads to air trapping. Which mechanistic link is best?",
      choices: [
        "Airways become more rigid and empty faster",
        "Loss of elastic recoil impairs expiration, enlarging poorly functioning air spaces and reducing effective gas-exchange surface",
        "Mucus gland hyperplasia is the primary emphysema lesion",
        "Elastin excess causes alveolar collapse only on inspiration"
      ],
      answer: 1,
      explain: "Emphysema pathophysiology in CSI: elastin breakdown → loss of recoil → collapse/air trapping → less efficient gas exchange."
    },
    {
      id: "b02", topic: "breathlessness",
      q: "Chronic bronchitis is defined clinically by productive cough ≥3 months in 2 consecutive years. Why does mucus hypersecretion cause dyspnoea?",
      choices: [
        "It increases alveolar elastic recoil",
        "Excess mucus obstructs airflow, especially expiration",
        "It always causes type 1 failure only",
        "It raises SpO₂ targets to 100%"
      ],
      answer: 1,
      explain: "Mucus fills airways → obstructive physiology. That is distinct from the elastin-loss story of emphysema, though both fall under COPD."
    },
    {
      id: "b03", topic: "breathlessness",
      q: "A COPD patient on 15 L O₂ develops rising PaCO₂ and drowsiness. Which explanation is most coherent with CSI teaching?",
      choices: [
        "Oxygen cannot affect CO₂",
        "Oxygen-induced hypercapnia (hypoxic drive blunting and/or Haldane-related reduced CO₂ carriage/clearance) is a recognised risk — target SpO₂ 88–92%",
        "This proves asthma, not COPD",
        "Always give maximum O₂ in COPD"
      ],
      answer: 1,
      explain: "CSI stresses controlled O₂ (88–92%) because excess O₂ can worsen hypercapnia via hypoxic drive and Haldane-related mechanisms."
    },
    {
      id: "b04", topic: "breathlessness",
      q: "ABG: low PaO₂, normal/low PaCO₂. This pattern is…",
      choices: [
        "Type 2 respiratory failure",
        "Type 1 respiratory failure — gas exchange failure with ventilation still clearing CO₂ relatively well",
        "Metabolic alkalosis only",
        "Always due to opioid overdose"
      ],
      answer: 1,
      explain: "Type 1 = hypoxaemia with normal/low CO₂ (V/Q mismatch/shunt). Type 2 adds hypoventilation/hypercapnia."
    },
    {
      id: "b05", topic: "breathlessness",
      q: "Late severe COPD with rising CO₂ and low O₂ is best classified as…",
      choices: [
        "Type 1 only forever",
        "Type 2 respiratory failure — inadequate alveolar ventilation",
        "Pure metabolic acidosis",
        "Normal ageing ABG"
      ],
      answer: 1,
      explain: "When ventilation fails, CO₂ rises — type 2 (hypercapnic) failure, common in advanced COPD."
    },
    {
      id: "b06", topic: "breathlessness",
      q: "CXR shows hyperinflation and flattened diaphragms. How does this follow from COPD mechanics?",
      choices: [
        "Lungs are underfilled",
        "Air trapping and loss of recoil expand lung volume and push the diaphragms down",
        "Flattening always means pleural effusion",
        "This is the silhouette sign of pneumonia"
      ],
      answer: 1,
      explain: "Hyperinflation from air trapping flattens diaphragms — classic COPD radiographic reasoning."
    },
    {
      id: "b07", topic: "breathlessness",
      q: "Renal failure causes dyspnoea via fluid overload and metabolic acidosis. Why does acidosis increase respiratory rate?",
      choices: [
        "CO₂ is irrelevant to pH",
        "Blowing off CO₂ (Kussmaul breathing) is respiratory compensation for metabolic acidosis",
        "The kidneys increase RR directly via phrenic pacing",
        "It is only anxiety"
      ],
      answer: 1,
      explain: "Metabolic acidosis → compensatory hyperventilation to lower PaCO₂ and raise pH."
    },
    {
      id: "b08", topic: "breathlessness",
      q: "Alpha intercalated cells respond to acidosis by…",
      choices: [
        "Secreting HCO₃⁻ into urine and reabsorbing H⁺",
        "Reabsorbing HCO₃⁻ and secreting H⁺ to raise blood pH",
        "Stopping all renal acid–base work",
        "Only acting in the lung"
      ],
      answer: 1,
      explain: "Alpha cells combat acidosis (HCO₃⁻ reabsorption + H⁺ secretion). Beta cells do the opposite in alkalosis."
    },
    {
      id: "b09", topic: "breathlessness",
      q: "Hypoxic pulmonary vasoconstriction helps V/Q matching. Why can chronic hypoxia in COPD still harm the right heart?",
      choices: [
        "It always cures pulmonary hypertension",
        "Widespread prolonged vasoconstriction raises pulmonary vascular resistance → pulmonary hypertension → RV strain/hypertrophy",
        "The left ventricle faces the pulmonary circuit directly",
        "V/Q matching never occurs in COPD"
      ],
      answer: 1,
      explain: "Local HPV is adaptive; global chronic HPV increases RV afterload — a key COPD complication pathway."
    },
    {
      id: "b10", topic: "breathlessness",
      q: "Liver failure with tense ascites causes dyspnoea mainly because…",
      choices: [
        "Ascites increases lung elastic recoil",
        "Raised intra-abdominal pressure restricts diaphragmatic descent → restrictive pattern",
        "It always causes pneumothorax",
        "Bilirubin blocks haemoglobin"
      ],
      answer: 1,
      explain: "Mechanical restriction of the diaphragm from ascites is the CSI link between liver failure and breathlessness."
    },
    {
      id: "b11", topic: "breathlessness",
      q: "Steroids for a COPD exacerbation in a diabetic patient require extra vigilance because…",
      choices: [
        "Steroids lower blood glucose",
        "They promote gluconeogenesis and insulin resistance, worsening glycaemic control",
        "They have no metabolic effects",
        "They only affect mood, never glucose"
      ],
      answer: 1,
      explain: "Corticosteroids worsen diabetes control — comorbidity management must be adjusted."
    },
    {
      id: "b12", topic: "breathlessness",
      q: "Consolidation on CXR appears white because…",
      choices: [
        "Air absorbs all X-rays",
        "Alveolar air is replaced by denser material (pus/fluid/blood/cells), increasing opacity",
        "Bones become radiolucent",
        "It is identical to pneumothorax"
      ],
      answer: 1,
      explain: "Air = black; denser alveolar fill = white/opaque. That is the imaging basis of consolidation."
    },
    {
      id: "b13", topic: "breathlessness",
      q: "The Haldane effect implies that highly oxygenated haemoglobin…",
      choices: [
        "Carries more CO₂ than deoxyhaemoglobin",
        "Carries less CO₂ than deoxyhaemoglobin, so excess O₂ can impair CO₂ unloading/clearance in vulnerable patients",
        "Has no relation to CO₂ transport",
        "Only matters in anaemia"
      ],
      answer: 1,
      explain: "DeoxyHb carries more CO₂; high oxygenation reduces that capacity — relevant to O₂-induced hypercapnia discussions in COPD."
    },

    /* ========== 5 ABDOMINAL PAIN ========== */
    {
      id: "a01", topic: "abdominal",
      q: "Post-prandial RUQ pain radiating to the scapula after fatty meals. Which mechanism best explains the pain?",
      choices: [
        "CCK-driven gallbladder contraction against stones → biliary colic",
        "Primary pancreatic enzyme deficiency only",
        "Always appendicitis",
        "Renal colic from the left kidney"
      ],
      answer: 0,
      explain: "Fat → CCK → gallbladder contracts; against stones this produces classic biliary colic with scapular radiation."
    },
    {
      id: "a02", topic: "abdominal",
      q: "Pain shifts from colicky to constant with fever and a positive Murphy's sign. What progression is suggested?",
      choices: [
        "Uncomplicated asymptomatic stones",
        "Inflammation of the gallbladder (cholecystitis) — pain becomes constant as inflammation establishes",
        "Resolution of all biliary disease",
        "Only IBS"
      ],
      answer: 1,
      explain: "CSI: stones may cause intermittent colic; mucosal injury/inflammation → cholecystitis with more constant pain + Murphy's."
    },
    {
      id: "a03", topic: "abdominal",
      q: "Charcot's triad is present. Adding confusion and hypotension suggests…",
      choices: [
        "A milder disease than Charcot's alone",
        "Reynolds' pentad — systemic involvement/sepsis complicating ascending cholangitis",
        "Unrelated panic attack",
        "Simple constipation"
      ],
      answer: 1,
      explain: "Reynolds' = Charcot + hypotension + confusion — a red flag for severe biliary sepsis."
    },
    {
      id: "a04", topic: "abdominal",
      q: "Why does ascending cholangitis cause jaundice?",
      choices: [
        "Infection increases bilirubin excretion",
        "Obstruction and inflammation impair bile flow → bilirubin backs up into blood",
        "It haemolyses all RBCs instantly",
        "Murphy's sign releases bilirubin from the gallbladder wall"
      ],
      answer: 1,
      explain: "Impaired biliary drainage → conjugated bilirubin retention → jaundice."
    },
    {
      id: "a05", topic: "abdominal",
      q: "Crohn's disease increases gallstone risk mainly because…",
      choices: [
        "It overproduces CCK continuously",
        "Terminal ileal disease impairs bile acid reabsorption → cholesterol supersaturation of bile",
        "It always obstructs the cystic duct mechanically",
        "Steroids dissolve cholesterol"
      ],
      answer: 1,
      explain: "Bile acid malabsorption from terminal ileal Crohn's alters bile composition toward cholesterol stones."
    },
    {
      id: "a06", topic: "abdominal",
      q: "NETs accelerate gallstone formation by…",
      choices: [
        "Dissolving cholesterol crystals",
        "Providing sticky DNA/protein scaffolds that promote nucleation and aggregation of crystals",
        "Blocking CCK receptors",
        "Increasing gallbladder motility only"
      ],
      answer: 1,
      explain: "CSI links NETs to nucleation — trapping/aggregating cholesterol crystals into growing stones."
    },
    {
      id: "a07", topic: "abdominal",
      q: "A large stone reaches the ileocaecal valve via a fistula. The resulting syndrome is…",
      choices: [
        "Biliary colic only",
        "Gallstone ileus — mechanical small bowel obstruction at a narrow point",
        "Uncomplicated cholelithiasis",
        "Primary sclerosing cholangitis"
      ],
      answer: 1,
      explain: "Cholecystoenteric fistula → stone in lumen → obstruction (often ileocaecal) = gallstone ileus."
    },
    {
      id: "a08", topic: "abdominal",
      q: "Umbilical pain migrating to the RIF with anorexia. Which regional reasoning fits?",
      choices: [
        "Classic appendicitis referral/migration pattern",
        "Always left-sided diverticulitis",
        "Testicular torsion only",
        "Splenic rupture"
      ],
      answer: 0,
      explain: "Visceral midgut pain starts peri-umbilical then localises to RIF as parietal peritoneum inflames — classic appendicitis teaching."
    },
    {
      id: "a09", topic: "abdominal",
      q: "Women have higher gallstone risk. Which hormonal inference is taught?",
      choices: [
        "Oestrogen/sex-steroid pathways relate to higher cholesterol handling that favours stone formation",
        "Women lack gallbladders",
        "Testosterone dissolves all stones",
        "Pregnancy always prevents stones"
      ],
      answer: 0,
      explain: "CSI links female sex hormones/cholesterol precursor relationships to higher gallstone risk (pregnancy, contraception)."
    },
    {
      id: "a10", topic: "abdominal",
      q: "Blood enters the hepatic lobule via portal vein and hepatic artery, then leaves via the central vein. Why process gut portal blood in the liver first?",
      choices: [
        "To avoid any nutrient absorption",
        "Hepatocytes detoxify and metabolise absorbed substances before they reach the systemic circulation",
        "The portal vein carries only oxygenated blood",
        "Bile flows into the portal vein"
      ],
      answer: 1,
      explain: "Portal perfusion lets the liver process nutrients/toxins from the gut before systemic distribution."
    },
    {
      id: "a11", topic: "abdominal",
      q: "Counselling for laparoscopic cholecystectomy should include early general risks such as…",
      choices: [
        "Only cosmetic outcomes",
        "Bleeding and infection (early general), plus procedure-specific risks like organ injury",
        "No risks exist for laparoscopy",
        "Guaranteed cure of Crohn's"
      ],
      answer: 1,
      explain: "CSI groups complications early/late and general/specific — bleeding/infection are classic early general risks."
    },
    {
      id: "a12", topic: "abdominal",
      q: "Pyelonephritis after cystitis is facilitated by…",
      choices: [
        "Antegrade sterile urine flow only",
        "Vesicoureteral reflux carrying bacteria up to the kidney",
        "Gallbladder contraction",
        "Spinothalamic decussation"
      ],
      answer: 1,
      explain: "VUR allows infected bladder urine to ascend — a key pathophysiological link."
    },

    /* ========== 6 BACK PAIN ========== */
    {
      id: "p01", topic: "backpain",
      q: "Sharp pinprick pain is perceived almost immediately, while dull aching arrives more slowly. Which fibre explanation fits?",
      choices: [
        "C fibres are faster because they are myelinated",
        "A-delta fibres are myelinated and faster (sharp pain); C fibres are unmyelinated and slower (dull pain)",
        "Both travel only in the dorsal column",
        "Pain never uses the spinothalamic tract"
      ],
      answer: 1,
      explain: "A-delta = fast/myelinated/sharp; C = slow/unmyelinated/dull — core CSI fibre teaching."
    },
    {
      id: "p02", topic: "backpain",
      q: "Why does sharp pain largely bypass the reticular formation while dull pain may involve it?",
      choices: [
        "Sharp pain needs maximal delay",
        "Rapid protective responses favour the fastest route; reticular relays would slow transmission needed for urgent behaviour",
        "The reticular formation only processes vision",
        "C fibres never reach the brain"
      ],
      answer: 1,
      explain: "CSI note: sharp pain takes the quickest path; reticular processing (arousal/modulation) suits slower dull pain pathways."
    },
    {
      id: "p03", topic: "backpain",
      q: "A lesion cuts the left half of the spinal cord. For pain/temperature from the right leg, where is the critical vulnerability?",
      choices: [
        "Pain fibres ascend ipsilateral all the way to the cortex without crossing",
        "Spinothalamic second-order fibres have already decussated near entry, so contralateral cord damage affects pain/temp from the opposite side",
        "Dorsal column lesions abolish pain first",
        "Pain synapses only in the cerebellum"
      ],
      answer: 1,
      explain: "Spinothalamic fibres cross early in the cord — contralateral cord lesions affect contralateral pain/temperature."
    },
    {
      id: "p04", topic: "backpain",
      q: "Fine touch from the foot is lost after a medulla lesion. Why might pain still be intact?",
      choices: [
        "Both pathways are identical",
        "Dorsal column pathways decussate in the medulla; spinothalamic pathways crossed earlier in the cord — brainstem lesions can dissociate modalities",
        "Pain uses only cranial nerves",
        "Touch never uses the dorsal column"
      ],
      answer: 1,
      explain: "Different decussation levels explain dissociated sensory loss — a classic pathway application."
    },
    {
      id: "p05", topic: "backpain",
      q: "Unilateral sciatica with foot drop suggests radiculopathy. Bilateral saddle anaesthesia and incontinence suggest…",
      choices: [
        "The same unilateral root lesion",
        "Cauda equina syndrome — a bilateral emergency pattern from compression of multiple lower roots",
        "Simple mechanical strain only",
        "Migraine"
      ],
      answer: 1,
      explain: "CSI: radiculopathy often unilateral; CES tends to bilateral deficits + sphincter/saddle signs — urgent."
    },
    {
      id: "p06", topic: "backpain",
      q: "Gallbladder inflammation referring to the right shoulder is explained by…",
      choices: [
        "Direct spinal metastasis only",
        "Shared/diaphragmatic (phrenic) pathways confusing visceral and somatic localisation",
        "Primary shoulder osteoarthritis always",
        "C-fibre blockade"
      ],
      answer: 1,
      explain: "Referred pain: visceral and somatic afferents converge — diaphragm/phrenic involvement refers to shoulder."
    },
    {
      id: "p07", topic: "backpain",
      q: "Why is the body 'bad' at localising visceral pain?",
      choices: [
        "Viscera have no nociceptors",
        "Visceral and somatic primary afferents synapse in overlapping spinal circuits, so the cortex may misattribute the source",
        "The thalamus ignores all visceral input",
        "Only A-delta fibres innervate viscera"
      ],
      answer: 1,
      explain: "Convergence in the cord underlies referred/poorly localised visceral pain."
    },
    {
      id: "p08", topic: "backpain",
      q: "Mechanical back pain after lifting that improves with rest and lacks neurological deficit is most consistent with…",
      choices: [
        "Mandatory immediate cauda equina surgery",
        "Muscular/mechanical strain rather than progressive cord compression",
        "Always AAA",
        "Primary pancreatic cancer"
      ],
      answer: 1,
      explain: "Mechanical pain patterns differ from neurological red flags — still examine carefully, but presentation guides urgency."
    },
    {
      id: "p09", topic: "backpain",
      q: "Stimulating the amygdala in a pain pathway context is most associated with…",
      choices: [
        "Vasoconstriction only",
        "Fear/affective dimension of the experience",
        "Faster A-delta conduction",
        "Increased urine output"
      ],
      answer: 1,
      explain: "CSI maps amygdala → fear; insula → autonomic features; reticular formation → arousal."
    },
    {
      id: "p10", topic: "backpain",
      q: "Disc herniation can cause back pain by compressing…",
      choices: [
        "Only abdominal organs",
        "Nerve roots and/or the cord/cauda equina depending on level and size",
        "The pituitary exclusively",
        "A-delta fibres in the skin of the forearm only"
      ],
      answer: 1,
      explain: "Herniation may hit roots (radiculopathy) or more central structures (cord/CES) — anatomy determines the syndrome."
    },
    {
      id: "p11", topic: "backpain",
      q: "Primary neurones of the dorsal column pathway synapse in the…",
      choices: [
        "Spinal cord dorsal horn only, like spinothalamic fibres",
        "Gracile/cuneate nuclei in the caudal medulla",
        "Amygdala",
        "Gallbladder wall"
      ],
      answer: 1,
      explain: "Key distinction: dorsal column 1° neurones ascend to medulla nuclei; spinothalamic 1° neurones synapse at cord entry."
    },
    {
      id: "p12", topic: "backpain",
      q: "AAA can present with back pain. Why must this enter the differential in older patients?",
      choices: [
        "AAA is a muscular strain equivalent",
        "Vascular expansion/rupture can irritate retroperitoneal structures and is life-threatening if missed",
        "AAA always causes sciatica first",
        "Back pain excludes vascular disease"
      ],
      answer: 1,
      explain: "CSI lists aorta/AAA among serious structural causes of back pain — a can't-miss diagnosis."
    },

    /* ========== 7 DIARRHOEA ========== */
    {
      id: "d01", topic: "diarrhoea",
      q: "Diarrhoea that stops with fasting and shows a high osmotic gap is most consistent with…",
      choices: [
        "Secretory diarrhoea from cholera toxin",
        "Osmotic diarrhoea due to poorly absorbed luminal solutes",
        "Always IBD",
        "Normal physiology"
      ],
      answer: 1,
      explain: "Osmotic diarrhoea improves with fasting and has an increased osmotic gap; secretory tends not to stop with fasting."
    },
    {
      id: "d02", topic: "diarrhoea",
      q: "Cholera-like enterotoxin diarrhoea continues despite fasting. Mechanistically this is because…",
      choices: [
        "Solute load from food is required",
        "Ion-channel driven secretion (e.g. Cl⁻ into the lumen) persists independent of oral intake",
        "It is pure maldigestion of lactose only",
        "The colon absorbs 10 L/day regardless"
      ],
      answer: 1,
      explain: "Secretory diarrhoea: abnormal mucosal ion transport → ongoing fluid secretion even when not eating."
    },
    {
      id: "d03", topic: "diarrhoea",
      q: "Bloody mucoid stools, fever and tenesmus point to inflammatory diarrhoea. Why might adults still avoid severe volume depletion more often than children?",
      choices: [
        "Inflammatory diarrhoea never loses fluid",
        "Stools are often small-volume though frequent; children/elderly tolerate losses less well",
        "Adults cannot get Campylobacter",
        "Tenesmus replaces fluid loss"
      ],
      answer: 1,
      explain: "CSI: infectious inflammatory diarrhoea is often small-volume/frequent — volume depletion more concerning in children/older adults."
    },
    {
      id: "d04", topic: "diarrhoea",
      q: "Lactase deficiency causes osmotic diarrhoea because…",
      choices: [
        "Lactose is hyperabsorbed",
        "Undigested lactose remains luminal, osmotically holding water",
        "It activates apical Cl⁻ channels like cholera",
        "It always produces faecal leukocytes"
      ],
      answer: 1,
      explain: "Maldigestion → unabsorbed solute → osmotic water retention in the lumen."
    },
    {
      id: "d05", topic: "diarrhoea",
      q: "After a meal, Na⁺ and glucose absorption promote water reabsorption. What transport idea is being applied?",
      choices: [
        "Water is secreted only when the stomach is full",
        "Solute absorption creates an osmotic gradient that water follows (reabsorption when the gut is 'full')",
        "Paracellular Cl⁻ secretion is the only post-prandial event",
        "SGLT-2 in the gut is the main glucose absorber"
      ],
      answer: 1,
      explain: "CSI: empty gut → secretory mode; after meals solute uptake drives osmotic water reabsorption. SGLT-1 (not SGLT-2) is the intestinal glucose cotransporter."
    },
    {
      id: "d06", topic: "diarrhoea",
      q: "IBS vs IBD: fever, blood, and weight loss favour…",
      choices: [
        "IBS",
        "IBD (inflammatory pathology)",
        "Neither ever causes abdominal pain",
        "Only viral gastroenteritis"
      ],
      answer: 1,
      explain: "Alarm/inflammatory features (blood, fever, weight loss) point away from uncomplicated IBS toward IBD/organic disease."
    },
    {
      id: "d07", topic: "diarrhoea",
      q: "Faecal calprotectin is raised. What inference is most appropriate?",
      choices: [
        "Proves IBS",
        "Supports intestinal inflammation (e.g. IBD) rather than functional disease alone",
        "Diagnoses ovarian cancer",
        "Excludes all infection"
      ],
      answer: 1,
      explain: "Calprotectin is a neutrophil-derived marker of gut inflammation — useful to support IBD vs IBS-type presentations."
    },
    {
      id: "d08", topic: "diarrhoea",
      q: "Ulcerative colitis vs Crohn's: continuous superficial colonic disease without granulomas fits…",
      choices: [
        "Crohn's disease",
        "Ulcerative colitis",
        "Neither form of IBD",
        "Only Meckel's diverticulitis"
      ],
      answer: 1,
      explain: "UC: continuous, mucosa-focused, colon/rectum, typically no granulomas. Crohn's: patchy, transmural, any GI site, granulomas possible."
    },
    {
      id: "d09", topic: "diarrhoea",
      q: "Why are drugs targeting intestinal transporters hard to design safely?",
      choices: [
        "Transporters exist only in the gut",
        "Shared transporters elsewhere (e.g. kidney, heart) mean off-target effects are likely",
        "All transporters are identical to haemoglobin",
        "They always cure secretory diarrhoea without risk"
      ],
      answer: 1,
      explain: "CSI treatment challenge: SGLT-type and other transporters aren't gut-unique — systemic side effects limit therapy."
    },
    {
      id: "d10", topic: "diarrhoea",
      q: "~10 L enters the GI tract daily but only ~0.1 L leaves in stool. Diarrhoea implies…",
      choices: [
        "Increased salivary secretion only",
        "A small percentage failure of reabsorption/secretion balance can produce large stool water losses",
        "The kidneys absorb intestinal fluid",
        "Stool water is normally 5 L/day"
      ],
      answer: 1,
      explain: "Huge fluxes mean even modest impairment of net absorption causes clinically obvious diarrhoea."
    },
    {
      id: "d11", topic: "diarrhoea",
      q: "Inducing Crohn's remission with steroids then maintaining with azathioprine reflects which strategy?",
      choices: [
        "One drug forever at induction doses",
        "Separate goals: control inflammation quickly, then prevent relapse with steroid-sparing immunosuppression",
        "Surgery is first-line for all new diagnoses",
        "Antibiotics alone maintain remission"
      ],
      answer: 1,
      explain: "CSI: induction (e.g. glucocorticoids/biologics) vs maintenance (thiopurines/methotrexate/biologics)."
    },
    {
      id: "d12", topic: "diarrhoea",
      q: "Positive faecal leukocytes suggest…",
      choices: [
        "Non-inflammatory osmotic diarrhoea",
        "Bowel inflammation (though sensitivity is imperfect)",
        "Definitely IBS",
        "Normal stool histology always"
      ],
      answer: 1,
      explain: "Leukocytes shouldn't be in stool; their presence supports inflammation. False negatives limit sensitivity."
    },

    /* ========== 8 CROHN'S COMPLICATIONS ========== */
    {
      id: "c01", topic: "crohns",
      q: "A Crohn's patient develops colicky pain, vomiting, and absolute constipation. Which complication is most likely?",
      choices: [
        "Simple aphthous mouth ulcer only",
        "Stricturing disease causing bowel obstruction",
        "Uncomplicated remission",
        "RhD incompatibility"
      ],
      answer: 1,
      explain: "Chronic inflammation → fibrosis/stricture → obstructive symptoms (pain, vomiting, constipation)."
    },
    {
      id: "c02", topic: "crohns",
      q: "Why prefer strictureplasty over resection when feasible in small bowel Crohn's?",
      choices: [
        "Resection always cures Crohn's permanently",
        "Preserving bowel length reduces risk of short bowel syndrome from cumulative resections",
        "Strictureplasty removes all disease mucosa",
        "Resection never helps obstruction"
      ],
      answer: 1,
      explain: "CSI: strictureplasty widens without removing bowel — preferred to protect against short bowel syndrome."
    },
    {
      id: "c03", topic: "crohns",
      q: "An enterovesical fistula is suggested clinically by…",
      choices: [
        "Isolated headache",
        "Pneumaturia/faecaluria and recurrent UTI-type symptoms",
        "Right shoulder tip pain only",
        "Painless jaundice alone"
      ],
      answer: 1,
      explain: "Fistula to bladder → air/stool in urine, foul urine, frequency — classic enterovesical features."
    },
    {
      id: "c04", topic: "crohns",
      q: "SOCRATES applied to pancreatitis should highlight pain that…",
      choices: [
        "Is only in the RIF and improves with fatty food",
        "Is epigastric/LUQ, radiates to the back, constant and severe",
        "Is always relieved by eating",
        "Never associates with vomiting"
      ],
      answer: 1,
      explain: "CSI pancreatitis pattern: epigastric/LUQ → back, constant, severe, nausea/vomiting."
    },
    {
      id: "c05", topic: "crohns",
      q: "Rovsing's sign is positive. What does that imply about peritoneal irritation?",
      choices: [
        "Left iliac disease only",
        "Palpating the left lower abdomen provokes right lower pain — supporting right-sided peritoneal irritation (e.g. appendicitis)",
        "Murphy's sign equivalent for the gallbladder",
        "Cauda equina compression"
      ],
      answer: 1,
      explain: "Rovsing: LLQ pressure → RLQ pain, consistent with appendiceal peritoneal irritation."
    },
    {
      id: "c06", topic: "crohns",
      q: "An RhD-negative woman of childbearing potential should not routinely receive RhD-positive blood because…",
      choices: [
        "RhD-positive blood is always infected",
        "Alloimmunisation can cause HDFN in a future RhD-positive fetus",
        "O negative blood lacks H antigen",
        "ABO genes are inactivated by transfusion"
      ],
      answer: 1,
      explain: "Anti-D formation risks haemolytic disease of the fetus/newborn in later pregnancies."
    },
    {
      id: "c07", topic: "crohns",
      q: "Group O RBCs express which ABO antigens?",
      choices: [
        "A and B",
        "Neither A nor B (H antigen remains unmodified)",
        "Only B",
        "Only GalNAc-modified H"
      ],
      answer: 1,
      explain: "O allele → inactive transferase → H antigen unchanged, no A/B antigens."
    },
    {
      id: "c08", topic: "crohns",
      q: "After colectomy, an ileostomy sits proud of the skin while a colostomy is flatter. Why?",
      choices: [
        "Cosmetic preference only",
        "Small-bowel effluent is liquid (needs a spout); colonic content is more formed (flush stoma better tolerated)",
        "Ileostomies never output fluid",
        "Colostomies always connect to the bladder"
      ],
      answer: 1,
      explain: "CSI appearance difference follows effluent consistency — practical surgical design."
    },
    {
      id: "c09", topic: "crohns",
      q: "Losing large-bowel water/electrolyte conservation leads to adaptive…",
      choices: [
        "Mandatory diabetes",
        "Changes such as hypomotility and aldosterone upregulation to increase residual absorption time/capacity",
        "Immediate liver failure",
        "Loss of all small bowel villi overnight"
      ],
      answer: 1,
      explain: "CSI adaptations after loss of colon: slower transit, aldosterone effects, muscular adaptation — to mitigate fluid/electrolyte loss."
    },
    {
      id: "c10", topic: "crohns",
      q: "A rectovaginal fistula may present with…",
      choices: [
        "Flatus or stool per vagina and foul discharge",
        "Only haemoptysis",
        "Painless neck swelling alone",
        "Unilateral foot drop"
      ],
      answer: 0,
      explain: "Rectovaginal fistula signs: vaginal passage of air/stool/pus, foul discharge, dyspareunia."
    },
    {
      id: "c11", topic: "crohns",
      q: "Smoking doubles Crohn's risk and worsens disease. What counselling application follows?",
      choices: [
        "Smoking is protective in Crohn's like in UC anecdotes — encourage it",
        "Smoking cessation is a core disease-modifying lifestyle intervention, especially perioperatively",
        "Smoking only affects fertility, not Crohn's",
        "Cessation has no role once biologics start"
      ],
      answer: 1,
      explain: "CSI: smokers have higher risk and worse disease — cessation is strongly advised."
    },
    {
      id: "c12", topic: "crohns",
      q: "Biological therapies reduce Crohn's inflammation primarily by…",
      choices: [
        "Stimulating every cytokine",
        "Blocking specific immune mediators (e.g. cytokines) that drive inflammation",
        "Replacing resected bowel",
        "Dissolving strictures chemically within minutes"
      ],
      answer: 1,
      explain: "Biologics target inflammatory pathways (e.g. anti-TNF and others taught in CSI) rather than acting as surgical substitutes."
    },
    {
      id: "c13", topic: "crohns",
      q: "Large bowel obstruction is described as more severe than small bowel obstruction in these notes. Practically, this means…",
      choices: [
        "SBO can be ignored",
        "Both are serious; LBO may progress more dangerously — urgent assessment remains essential for either",
        "LBO never needs imaging",
        "Pain character alone excludes all obstruction"
      ],
      answer: 1,
      explain: "Teaching point on relative severity should increase urgency for LBO, not complacency about SBO."
    },
  ],
};
