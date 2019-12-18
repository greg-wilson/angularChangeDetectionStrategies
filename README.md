# Angular Change Detection
Demonstrate Angular Change Detection Strategies

## change-detection-default
Uses Default change detection. Outputs to console when ngDoCheck is invoked in order to demonstrate change detection.

## change-detection-onpush
Uses OnPush change detection. Outputs to console when ngDoCheck is invoked in order to demonstrate change detection. Improve performance by using Pure Pipes, handeling mouse events outside of angular, manually invoking change detection in websocket handler, and using immutable object as inputs.

## change-detection-subject
Uses OnPush change detection. Uses a BehaviorSubject to coordinate data between components eliminating need for inputs/outputs.

## sender
Sends ticker data over public website via websocket. Change detection apps receive data and display in ticker component.
