# Bleeding Risk / Veinous Thromboembolism (VTE) Medical Calculators

This project sprung out of research my wife is doing for her doctoral degree program.

She came across some related medical calculators on the [MDCalc.com](https://www.mdcalc.com/) website
related to her research. Please visit (and use) the original calculators on MDCalc if you are
interested in the medical content. This project is not intended to replace or compete with MDCalc
in any way. It is simply a practice project for me to work on some technical skills.

- [Original Bleeding Risk Calculator](https://www.mdcalc.com/calc/10465/improve-bleeding-risk-score) by Dr. Hervé
  Décousus
- [Original VTE Calculator](https://www.mdcalc.com/calc/10349/improve-risk-score-venous-thromboembolism-vte) by Dr. Alex
  C. Spyropoulos

Since these are all frontend calculators I saw this as an opportunity to explore a couple of technical things
I've wanted to work with a bit to become more familiar with them.

I initially did a pure "Vibe Coded" implementation of the VTE calculator using Github Co-pilot over
[in a different repository](https://github.com/mpegram3rd/vte-med-calc). See that repository for more information.

I was very dissatisfied with how badly the code looked and could see how awful it would be to maintain or modify. I also
wanted to spend a little time practicing some React with Typescript so decided to use traditional development for
the "Bleeding Risk" calculator.

After completing that calculator I decided to refactor it to support multiple calculators and re-created the VTE
Calculator
here. This let me lean into making the React components more generic and reusable, which was one of the goals
of this practice project.

## Setup

Running this project is pretty easy / straightforward. It was bootstrapped using Vite so all you really
need to do is:

- `npm install`
- `npm run dev` to run it in local mode
- `npm run build` to create a production build

