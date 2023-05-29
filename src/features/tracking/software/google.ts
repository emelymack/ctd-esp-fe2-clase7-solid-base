import { TraceableEvent, TrackingSoftware } from 'features/tracking/tracking.types';

class GoogleTrackingSoftware implements TrackingSoftware {
  trackEvent(e: TraceableEvent): void {
    console.log('Google tracking event: ' + e.name + ' from location: ' + e.location);
  }

  /**
   * We shouldn't have this method in our TrackingSoftware interface if we don't need the initialize feature
   */
  // initialize(): void {
    // DO NOTHING
  // }
}

export default GoogleTrackingSoftware;
