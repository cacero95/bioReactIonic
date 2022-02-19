import { calculateBiorhythm } from "./calculation";

it( 'calculates the biorhythm', () => {
    const { physical, emotional, intellectual } = calculateBiorhythm( '1995-02-01', '2022-02-15' );
    expect( physical ).toBeCloseTo( 0.6311 );
    expect( emotional ).toBeCloseTo( -0.9749 );
    expect( intellectual ).toBeCloseTo( 0.9898 );
});