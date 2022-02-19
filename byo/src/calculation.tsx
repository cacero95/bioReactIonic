import dayjs from "dayjs";

export const formatDate = ( date: any ) => dayjs( date ).format( 'D MMM YYYY' );

export const calculateBiorhythm = ( birthDate: string, targetDate: string ) => {
    const diff = dayjs( targetDate ).startOf( 'day' ).diff(
        dayjs( birthDate ).startOf( 'day' ), 'days'
    );
    const result = 2 * Math.PI * diff;
    return {
        physical: parseFloat( Math.sin( result / 23 ).toFixed( 4 )),
        emotional: parseFloat( Math.sin( result / 28 ).toFixed( 4 )),
        intellectual: parseFloat( Math.sin( result / 33 ).toFixed( 4 ))
    }
} 