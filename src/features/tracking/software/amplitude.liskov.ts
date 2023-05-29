import { AmplitudeTrackingSoftware } from 'features/tracking/software/index';
import { TraceableEvent } from '../tracking.types';

class AmplitudeLiskovTrackingSoftware extends AmplitudeTrackingSoftware {
  /**
   * This class violates the Liskov principle because is modificating the behavior of the upper class. and is also violating the open-closed principle as well
   */
  trackEvent(event: TraceableEvent): void {
    console.log(event.getEventData());
  }
}

export default AmplitudeLiskovTrackingSoftware;
