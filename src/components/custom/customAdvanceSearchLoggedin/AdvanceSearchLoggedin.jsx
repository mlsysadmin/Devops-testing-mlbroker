import React from 'react';

const options = [
  { key: 'A1', label: 'Alarm System' },
  { key: 'A2', label: 'Air Condition' },
  { key: 'A3', label: 'Attic' },
  { key: 'B1', label: 'Badminton' },
  { key: 'B2', label: 'Balcony' },
  { key: 'B3', label: 'Bar' },
  { key: 'B4', label: 'Basement' },
  { key: 'B5', label: 'Basketball Court' },
  { key: 'C1', label: 'Broadband Internet' },
  { key: 'C2', label: 'Built-in Wardrobes' },
  { key: 'C3', label: 'CCTV' },
  { key: 'C4', label: 'Carport' },
  { key: 'C5', label: 'Central Air Condition' },
  { key: 'C6', label: 'Clubhouse' },
  { key: 'C7', label: 'Courtyard' },
  { key: 'D1', label: 'Deducted Cooling' },
  { key: 'D2', label: 'Deducted Vacuum System' },
  { key: 'D3', label: 'Driver Room' },
  { key: 'E1', label: 'Ensuite' },
  { key: 'E2', label: 'Entertainment Room' },
  { key: 'F1', label: 'Fire Alarm' },
  { key: 'F2', label: 'Fireplace' },
  { key: 'F3', label: 'Floorboards' },
  { key: 'F4', label: 'Fully Fenced' },
  { key: 'F5', label: 'Function Area' },
  { key: 'G1', label: 'Garage' },
  { key: 'G2', label: 'Garden' },
  { key: 'G3', label: 'Gazebos' },
  { key: 'G4', label: 'Gym' },
  { key: 'J1', label: 'Jacuzzi' },
  { key: 'J2', label: 'Jogging Path' },
  { key: 'L1', label: 'Lanai' },
  { key: 'L2', label: 'Landscape Garden' },
  { key: 'L3', label: 'Library' },
  { key: 'L4', label: 'Lounge' },
  { key: 'M1', label: 'Maid Room' },
  { key: 'M2', label: 'Multi-purpose Lawn' },
  { key: 'O1', label: 'Open Car Spaces' },
  { key: 'P1', label: 'Parking Lot' },
  { key: 'P2', label: 'Parks' },
  { key: 'P3', label: 'Pay TV Access' },
  { key: 'P4', label: 'Playground' },
  { key: 'P5', label: 'Powder Area' },
  { key: 'R1', label: 'Remove Garage' },
  { key: 'S1', label: 'Sauna' },
  { key: 'S2', label: 'Secure Parking' },
  { key: 'S3', label: 'Service Area' },
  { key: 'S4', label: 'Service Kitchen' },
  { key: 'S5', label: 'Shower Rooms' },
  { key: 'S6', label: 'Smoke Detector' },
  { key: 'S7', label: 'Split System Heating' },
  { key: 'S8', label: 'Sports Facilities' },
  { key: 'S9', label: 'Storage Room' },
  { key: 'S10', label: 'Study Room' },
  { key: 'S11', label: 'Swimming Pool' },
  { key: 'T1', label: 'Tennis Court' },
  { key: 'T2', label: 'Terrace' },
  { key: 'W1', label: 'Wifi' },
  { key: '0-91', label: '21 Hour Security' },
];

const groupByFirstLetter = (options) => {
  return options.reduce((acc, option) => {
    const firstLetter = option.label.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(option);
    return acc;
  }, {});
};

const CheckboxGroup = () => {
  const groupedOptions = groupByFirstLetter(options);
  const letters = Object.keys(groupedOptions).sort((a, b) => {
    if (/\d/.test(a)) return 1;
    if (/\d/.test(b)) return -1;
    return a.localeCompare(b);
  });

  return (
    <div style={{width:"95%"}}>
      {letters.map((letter) => (
        <div key={letter} style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', gap:"1rem", justifyContent:"flex-start" }}>
          <h3 style={{ marginBottom: '10px', color:"#8C9094" }}>{letter}</h3>
          <div style={{ display: 'grid', gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",width:"100%", gap: '10px',alignItems:"center", justifyContent:"center" }}>
            {groupedOptions[letter].map((option) => (
              <div key={option.key} style={{color:"#8C9094", display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" id={option.key} name={option.label} style={{ marginRight: '5px' }} />
                <label htmlFor={option.key}>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;