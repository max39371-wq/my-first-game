import json
import glob

# Specific Overrides
OVERRIDES = {
    "sa": { "eco": 70, "stb": 70, "pop": 65, "mil": 70, "corr": 45, "econ": "resources" },
    "de": { "eco": 75, "stb": 70, "pop": 60, "mil": 55, "corr": 20, "econ": "industry" },
    "sg": { "eco": 85, "stb": 85, "pop": 70, "mil": 50, "corr": 10, "econ": "trade" },
    "us": { "eco": 75, "stb": 60, "pop": 55, "mil": 90, "corr": 35, "econ": "mixed" },
    "so": { "eco": 20, "stb": 15, "pop": 40, "mil": 25, "corr": 85, "econ": "agriculture" },
    "no": { "eco": 80, "stb": 85, "pop": 75, "mil": 55, "corr": 10, "econ": "resources" },
    "ve": { "eco": 15, "stb": 35, "pop": 40, "mil": 45, "corr": 90, "econ": "resources" },
    "ch": { "eco": 70, "stb": 80, "pop": 60, "mil": 85, "corr": 35, "econ": "industry" } # Wait, Swiss is 'ch', yes.
}

def determine_profile(country, filepath):
    cid = country['id']
    if cid in OVERRIDES:
        return { "id": cid, **OVERRIDES[cid] }

    # Defaults
    eco = 50
    stb = 50
    pop = 50
    mil = 50
    corr = 50
    econ = "mixed"

    # 1. Determine economy based on development indicator or region/form/judiciary
    # Let's read some properties of the country to decide realistically.
    form = country.get("form", "republic")
    sys = country.get("sys", "parliamentary")
    jud = country.get("jud", "moderate")
    leg = country.get("legPower", "moderate")
    is_monarchy = (form == "monarchy")

    # Let's adjust starting stats based on these properties:
    # Rich democracies / high-judiciary states: high eco, high stb, low corr, services or industry
    if jud == "high" and leg in ["high", "moderate"]:
        eco = 70
        stb = 75
        corr = 25
        pop = 60
        econ = "services"
    elif jud == "limited":
        eco = 40
        stb = 45
        corr = 70
        pop = 45
        econ = "resources"

    # Specific systems / conditions
    if sys == "absolute":
        # Rentier monarchies or absolute systems: oil/resources, medium corr
        eco = 65
        stb = 65
        corr = 50
        econ = "resources"
    elif sys in ["military", "provisional"]:
        # Fragile states
        eco = 30
        stb = 25
        corr = 80
        pop = 35
        mil = 65
        econ = "agriculture"

    # Regional/file-based fine tuning
    if "africa" in filepath:
        # Standard African republic starting point
        stb = max(15, stb - 10)
        eco = max(15, eco - 10)
        corr = min(95, corr + 10)
        mil = max(30, mil + 5)
        if econ == "services":
            econ = "agriculture"
    elif "europe" in filepath:
        # Standard European republic
        stb = min(90, stb + 10)
        eco = min(90, eco + 10)
        corr = max(5, corr - 10)
        if econ == "resources":
            econ = "industry"
    elif "monarchies" in filepath:
        # Monarchies often have higher stability and military
        stb = min(90, stb + 10)
        mil = min(90, mil + 10)

    # Ensure range limits
    eco = max(0, min(100, eco))
    stb = max(0, min(100, stb))
    pop = max(0, min(100, pop))
    mil = max(0, min(100, mil))
    corr = max(0, min(100, corr))

    # Econ check
    allowed_econ = ["resources", "industry", "trade", "services", "agriculture", "mixed"]
    if econ not in allowed_econ:
        econ = "mixed"

    return {
        "id": cid,
        "eco": eco,
        "stb": stb,
        "pop": pop,
        "mil": mil,
        "corr": corr,
        "econ": econ
    }

def main():
    profiles = []
    files = sorted(glob.glob("data/*.json"))

    # Ensure data/profiles.json itself is not read if we run this.
    files = [f for f in files if "profiles.json" not in f]

    seen_ids = set()
    for f in files:
        with open(f, "r", encoding="utf-8") as fh:
            countries = json.load(fh)
            for country in countries:
                cid = country["id"]
                if cid in seen_ids:
                    print(f"Warning: duplicate id {cid} in {f}")
                    continue
                seen_ids.add(cid)
                profile = determine_profile(country, f)
                profiles.append(profile)

    # Sort profiles by ID to keep it clean and deterministic
    profiles.sort(key=lambda x: x["id"])

    print(f"Generated {len(profiles)} profiles.")

    with open("data/profiles.json", "w", encoding="utf-8") as out:
        json.dump(profiles, out, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    main()
