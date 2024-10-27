import * as d3 from "d3";

export async function loadData() {
  const data = await d3.csv("/Electric_Vehicle_Population_Data.csv");
  return data.map((row) => ({
    county: row.County,
    city: row.City,
    state: row.State,
    modelYear: +row["Model Year"],
    make: row.Make,
    model: row.Model,
    evType: row["Electric Vehicle Type"],
    cafvEligibility: row["Clean Alternative Fuel Vehicle (CAFV) Eligibility"],
    electricRange: parseFloat(row["Electric Range"]),
    baseMsrp: parseFloat(row["Base MSRP"]),
    legislativeDistrict: row["Legislative District"],
    dolVehicleId: row["DOL Vehicle ID"],
    vehicleLocation: row["Vehicle Location"],
    electricUtility: row["Electric Utility"],
    censusTract: row["2020 Census Tract"],
    vin: row['VIN (1-10)'],
  }));
}
