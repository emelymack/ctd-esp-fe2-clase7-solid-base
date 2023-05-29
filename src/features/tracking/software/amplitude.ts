import { Initializable, TraceableEvent, TrackingSoftware } from 'features/tracking/tracking.types';

abstract class AmplitudeTrackingSoftware implements TrackingSoftware, Initializable {
  private initialized = false;

  initialize(): void {
    this.initialized = true;
    console.log('initialized');
    
    // DO EXTRA LOGIC
  }

  trackEvent(event: TraceableEvent): void {
    console.log(event.getEventData());
    
    if (this.initialized) {
      console.log('Event: ' + event.name + ' dispatched from: ' + event.location);
    }
  }
}

export default AmplitudeTrackingSoftware;
