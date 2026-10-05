# Solar comparison for Science on Screen

These are reference model estimates, not measured house production or a site-specific forecast. The reference location is 45° N, 71.75° W, following the presentation's agreed 45°-latitude assumption. It is north of Franconia, not the actual house location.

## Configurations

- Roof: assumed 32 panels × 415 W = 13.28 kW; nearly flat, tilted 2.5° toward west (PVGIS aspect +90°).
- The API requests specify `angle=2.5`; PVGIS response metadata reports slope as the integer `2`. Treat this as an approximately 2–2.5° roof estimate rather than precision to a tenth of a degree.
- Walls: 11 panels × 415 W = 4.565 kW on each of the vertical east, south and west walls; 13.695 kW total.
- Crystalline silicon; ventilated/free-standing thermal model; 14% common system-loss assumption.
- No terrain horizon, nearby trees, buildings, panel snow coverage, battery, inverter clipping, household demand, curtailment or export-value model. PVGIS PVcalc/seriescalc are simplified production estimates, not a detailed inverter design.
- Treat panel snow coverage and the value of the panels as siding as separate arguments. The graph does not estimate either benefit.

## Sources and time periods

[European Commission JRC PVGIS API documentation](https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/using-pvgis-5/api-non-interactive-service_en).

PVGIS 5.2 with PVGIS-NSRDB solar data and ERA5 meteorological data. The NSRDB database used here is supported by PVGIS 5.2, not 5.3.

Monthly curves use the 2005–2015 climatological average returned by PVcalc. The summer-day view averages each clock hour of June 2015 from seriescalc; it includes that year's weather, rather than representing a chosen sunny day. UTC timestamps are converted to America/New_York, which is EDT (UTC−4) in June. Each clock-hour average has 30 observations.

Saved PVcalc response metadata, inputs, monthly outputs and the hourly request URLs are in `solar-model.json`. The plotted values are also provided as editable CSV files.

## Results and interpretation

- Roof: 13,038.72 kWh/year, about 13.0 MWh.
- Snow-covered roof scenario: set January–March roof output to zero, removing 2,240.30 kWh and leaving 10,798.43 kWh/year, about 10.8 MWh. This is an explicit assumption, not a PVGIS snow estimate or measured roof production.
- Walls combined: 9,107.82 kWh/year, about 9.1 MWh, 30.1% less than the roof reference.
- Under the January–March zero-roof assumption, the walls produce 15.7% less energy over the year. The wall model produces 2,106.84 kWh in January–March, when the assumed roof produces zero.
- South wall: 3,717.12 kWh/year; east: 2,719.81; west: 2,670.89.
- Winter (December–February) share of annual output: roof 11.0%; walls 18.2%. December–February totals are 1,438.61 kWh for the roof and 1,661.46 kWh for the walls. Walls produce more in November, December and January, even without modeled snow losses.
- East/west panels redistribute output through the day; the combined wall array has a much lower midday peak in the June average.
- Daniel reports that snow reflection boosts the wall array; during a bright, snowy winter period it briefly reached about 110% of rated power. That is an observed peak, separate from this model and from seasonal energy yield. The seasonal energy boost has not been quantified. The zero-roof scenario represents his concern that prolonged snow cover could stop production for roughly three months.
- The wall panels also replace some exterior cladding and its painting or maintenance. Placing them on the walls avoids putting this array's weight and mounts on the roof. Those material and construction benefits are not included in the energy comparison.
- These figures do not establish usable energy or summer surplus; those depend on household consumption, storage and export arrangements. Daniel's stated goal is to avoid concentrating more production in summer than he can use.

[DOE discussion of vertical PV and winter weather](https://www.energy.gov/cmei/femp/solar-photovoltaic-hardening-resilience-winter-weather) supports the separate discussion of low-angle winter sun and snow shedding. Actual snow losses have not been assigned numerical values here.

## Files and regeneration

- `solar-monthly.csv`: monthly energy, roof baseline and snow scenario, each wall and the wall total, in kWh.
- `solar-daily-june.csv`: average June 2015 hourly power in kW, local summer clock time.
- `solar-model.json`: model metadata and saved source results.
- `../../scripts/render-solar-comparison.py`: optional chart-generation script; requires Matplotlib. It does not add runtime dependencies to the website.

From the repository root, run `python3 presentations/scripts/render-solar-comparison.py` in a Python environment with Matplotlib installed.

The combined chart is embedded in the slide. Standalone seasonal and daily charts are provided for closer review, and an SVG copy of the combined chart keeps its text and data paths editable.
