import Star from '../assets/star.svg'
import StarHalf from '../assets/star-half.svg'
import StarEmpty from '../assets/star-empty.svg'
import '../Styles/StarScore.css'

export function StarScore({score}){

  const [integerPart, decimalPart] = score.toString().split('.');

  const integer = parseInt(integerPart);
  const decimal = parseInt(decimalPart || 0);

  const starComponents = [];

  for (let i = 0; i < integer; i++) {
    starComponents.push(<img key={`star-${i}`} className='start-score' src={Star} alt="Full Star" />);
  }

  if (decimal >= 1) {
    starComponents.push(<img key={`half-star`} className='start-score' src={StarHalf} alt="Half Star" />);
  }

  for (let i = starComponents.length; i < 5; i++) {
    starComponents.push(<img key={`empty-star-${i}`} className='start-score' src={StarEmpty} alt="Empty Star" />);
  }
  return(
    <div className='star-container'>
      {starComponents.map((component) => (
        component
      ))}
    </div>
  )

}