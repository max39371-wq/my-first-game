import json
import glob
import os

def test_profiles_validation():
    profiles_filepath = "data/profiles.json"
    assert os.path.exists(profiles_filepath), f"File {profiles_filepath} does not exist"

    # 1. Read profiles data
    with open(profiles_filepath, "r", encoding="utf-8") as f:
        try:
            profiles = json.load(f)
        except json.JSONDecodeError as e:
            raise AssertionError(f"Invalid JSON format in {profiles_filepath}: {e}")

    assert isinstance(profiles, list), "Root element of profiles.json must be a list"

    # 2. Collect IDs from the 5 core country JSON files
    country_files = [
        "data/monarchies.json",
        "data/republics_africa.json",
        "data/republics_americas_oceania.json",
        "data/republics_asia.json",
        "data/republics_europe.json"
    ]

    expected_ids = set()
    for f in country_files:
        assert os.path.exists(f), f"Country file {f} does not exist"
        with open(f, "r", encoding="utf-8") as fh:
            countries = json.load(fh)
            for c in countries:
                cid = c.get("id")
                assert cid, f"Country missing 'id' in {f}"
                expected_ids.add(cid)

    # 3. Check exact matches & schema constraints
    profile_ids = set()
    allowed_econ = {"resources", "industry", "trade", "services", "agriculture", "mixed"}
    required_keys = {"id", "eco", "stb", "pop", "mil", "corr", "econ"}

    for idx, p in enumerate(profiles):
        # Check exactly standard schema keys (in any order, but let's check exact keys presence)
        assert isinstance(p, dict), f"Profile at index {idx} is not an object"
        p_keys = set(p.keys())
        assert p_keys == required_keys, f"Profile at index {idx} ({p.get('id', 'Unknown')}) does not have exact keys {required_keys}. Got {p_keys}"

        cid = p["id"]
        assert isinstance(cid, str) and len(cid) >= 2, f"Invalid country id: {cid} in profile {idx}"
        assert cid not in profile_ids, f"Duplicate country id in profiles: {cid}"
        profile_ids.add(cid)

        # Value constraints: stats in 0-100
        for stat in ["eco", "stb", "pop", "mil", "corr"]:
            val = p[stat]
            assert isinstance(val, int), f"Stat '{stat}' must be an integer, got {type(val)} in profile {cid}"
            assert 0 <= val <= 100, f"Stat '{stat}' value {val} must be in range [0, 100] in profile {cid}"

        # Econ sector constraint
        econ = p["econ"]
        assert econ in allowed_econ, f"Invalid 'econ' value '{econ}' in profile {cid}. Must be one of {allowed_econ}"

    # Verify ID match: exactly one profile for every ID found (no missing, no extras)
    missing_ids = expected_ids - profile_ids
    extra_ids = profile_ids - expected_ids

    assert len(missing_ids) == 0, f"Profiles missing entries for IDs: {missing_ids}"
    assert len(extra_ids) == 0, f"Profiles contains extra entries for IDs: {extra_ids}"
    assert len(profiles) == len(expected_ids), f"Expected {len(expected_ids)} profiles, but got {len(profiles)}"

    print(f"Success! All {len(profiles)} profiles validated successfully against country data.")

if __name__ == "__main__":
    test_profiles_validation()
