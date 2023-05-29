import { ClickableEvent, TypeableEvent } from "../tracking.types";

export class ClickEvent implements ClickableEvent {
  name: string

  location: string;

  target: string;

  constructor(name: string, location: string, target: string) {
    this.name = name
    this.location = location
    this.target = target
  }
  
  getEventData() : string {
    return `Click event: ${this.name}, location: ${this.location}, target: ${this.target}`
  }

}

export class KeyUpEvent implements TypeableEvent {
  name: string

  location: string

  key: string

  constructor(name: string, location: string, key: string) {
    this.name = name
    this.location = location
    this.key = key
  }
  
  getEventData() : string {
    return `KeyUp event: ${this.name}, location: ${this.location}, target: ${this.key}`
  }

}

