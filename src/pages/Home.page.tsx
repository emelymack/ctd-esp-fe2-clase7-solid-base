import { FC, useEffect } from 'react';
import { LocationsComponent } from 'features/locations';
import useTracking from 'features/tracking/tracking.context';
import { KeyUpEvent } from 'features/tracking/software/Event';

/**
 * HomePage
 *
 * Usage:
 * ``` <HomePage /> ```
 *
 * @returns the home page
 */
const HomePage: FC = () => {
  const { trackEvent } = useTracking()

  const handleKeyUp = (e: KeyboardEvent): void => {
    const event = new KeyUpEvent('KeyUp', '/path/to/location', e.key)
    trackEvent(event)
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className={'container'}>
      <LocationsComponent />
    </div>
  )
}


export default HomePage;
