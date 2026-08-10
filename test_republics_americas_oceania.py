import json
import os

REQUIRED_COUNTRIES = {
    "United States", "Mexico", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "Costa Rica",
    "Panama", "Cuba", "Dominican Republic", "Haiti", "Barbados", "Trinidad and Tobago", "Dominica",
    "Guyana", "Suriname", "Colombia", "Venezuela", "Ecuador", "Peru", "Brazil", "Bolivia",
    "Paraguay", "Uruguay", "Argentina", "Chile", "Fiji", "Vanuatu", "Kiribati", "Marshall Islands",
    "Micronesia", "Palau", "Nauru", "Samoa"
}

ALLOWED_SYS = {"presidential", "parliamentary", "semi_presidential", "council", "one_party", "military", "provisional"}
ALLOWED_PLAYER = {"president", "prime_minister", "council"}
ALLOWED_LEG_TYPE = {"none", "unicameral", "bicameral"}
ALLOWED_LEG_POWER = {"none", "low", "moderate", "high"}
ALLOWED_JUD = {"limited", "moderate", "high"}
ALLOWED_MIL = {"civilian", "mixed", "military"}
ALLOWED_PARTIES = {"none", "one", "multi"}

SCHEMA_KEYS = [
    "id", "ar", "en", "flag", "form", "sys", "player", "legType", "legPower", "jud", "mil",
    "terms", "parties", "federal", "desc"
]

DESC_KEYS = ["ar", "en"]

def test_validation():
    filepath = "data/republics_americas_oceania.json"
    assert os.path.exists(filepath), f"File {filepath} does not exist"

    with open(filepath, "r", encoding="utf-8") as f:
        # Load JSON and verify no syntax issues (valid JSON)
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            raise AssertionError(f"Invalid JSON format in {filepath}: {e}")

    assert isinstance(data, list), "Root element of the JSON must be a list"
    assert len(data) == len(REQUIRED_COUNTRIES), f"Expected {len(REQUIRED_COUNTRIES)} countries, but got {len(data)}"

    found_countries = set()
    found_ids = set()

    for idx, card in enumerate(data):
        # 1. Check exact key order and presence
        card_keys = list(card.keys())

        # We need to support 'terms' conditionally, but we must preserve key order.
        # Let's check if key order strictly follows SCHEMA_KEYS sequence.
        expected_keys = []
        for key in SCHEMA_KEYS:
            if key == "terms" and "terms" not in card:
                continue
            expected_keys.append(key)

        assert card_keys == expected_keys, f"Card at index {idx} ({card.get('en', 'Unknown')}) has incorrect key order or schema. Got: {card_keys}, expected: {expected_keys}"

        # 2. Check types & allowed values
        # id
        cid = card.get("id")
        assert isinstance(cid, str) and len(cid) >= 2, f"Invalid id: {cid}"
        assert cid not in found_ids, f"Duplicate id: {cid}"
        found_ids.add(cid)

        # ar
        assert isinstance(card.get("ar"), str) and len(card.get("ar")) > 0, "ar must be a non-empty string"

        # en
        en_name = card.get("en")
        assert en_name in REQUIRED_COUNTRIES, f"Country '{en_name}' is not in the list of allowed/required republics or is misspelled."
        assert en_name not in found_countries, f"Duplicate country entry: {en_name}"
        found_countries.add(en_name)

        # flag
        flag = card.get("flag")
        assert isinstance(flag, str) and len(flag) >= 2, f"Invalid flag: {flag}"

        # form
        assert card.get("form") == "republic", f"form must be 'republic' for {en_name}"

        # sys
        sys_val = card.get("sys")
        assert sys_val in ALLOWED_SYS, f"Invalid sys value '{sys_val}' for {en_name}"

        # player
        player_val = card.get("player")
        assert player_val in ALLOWED_PLAYER, f"Invalid player value '{player_val}' for {en_name}"

        # legType
        leg_type_val = card.get("legType")
        assert leg_type_val in ALLOWED_LEG_TYPE, f"Invalid legType value '{leg_type_val}' for {en_name}"

        # legPower
        leg_power_val = card.get("legPower")
        assert leg_power_val in ALLOWED_LEG_POWER, f"Invalid legPower value '{leg_power_val}' for {en_name}"

        # jud
        jud_val = card.get("jud")
        assert jud_val in ALLOWED_JUD, f"Invalid jud value '{jud_val}' for {en_name}"

        # mil
        mil_val = card.get("mil")
        assert mil_val in ALLOWED_MIL, f"Invalid mil value '{mil_val}' for {en_name}"

        # terms (optional)
        if "terms" in card:
            terms_val = card.get("terms")
            assert isinstance(terms_val, list), f"terms must be an array for {en_name}"
            assert len(terms_val) == 2, f"terms must have exactly 2 elements [maxTerms, yearsPerTerm] for {en_name}"
            assert isinstance(terms_val[0], int) and isinstance(terms_val[1], int), f"terms elements must be integers for {en_name}"

        # parties
        parties_val = card.get("parties")
        assert parties_val in ALLOWED_PARTIES, f"Invalid parties value '{parties_val}' for {en_name}"

        # federal
        assert isinstance(card.get("federal"), bool), f"federal must be a boolean for {en_name}"

        # desc
        desc_val = card.get("desc")
        assert isinstance(desc_val, dict), f"desc must be an object for {en_name}"
        assert list(desc_val.keys()) == DESC_KEYS, f"desc keys must be exactly {DESC_KEYS} for {en_name}"
        assert isinstance(desc_val.get("ar"), str) and len(desc_val.get("ar")) > 0, f"desc.ar must be non-empty string for {en_name}"
        assert isinstance(desc_val.get("en"), str) and len(desc_val.get("en")) > 0, f"desc.en must be non-empty string for {en_name}"

    # Verify all required countries are covered
    missing = REQUIRED_COUNTRIES - found_countries
    assert len(missing) == 0, f"Missing countries in the JSON: {missing}"

    print(f"Success! All {len(data)} countries validated successfully.")

if __name__ == "__main__":
    test_validation()
