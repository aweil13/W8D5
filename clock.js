class Clock {
    constructor() {
     this.date = new Date();
     this.hours = this.date.getHours();
     this.minutes = this.date.getMinutes();
     this.seconds = this.date.getSeconds();
     this.printTime(this.hours, this.minutes, this.seconds);
        setInterval(() => this._tick(), 1000);
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime(hours, minutes, seconds) {
      
      console.log(`${hours}:${minutes}:${seconds}`)
        // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
        if (this.seconds === 60) {
            this.minutes += 1;
            this.seconds = 0
        }
        if (this.minutes === 60) {
            this.hours += 1
            this.minutes = 0
        }
        if (this.hours === 24) {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
        this.printTime(this.hours, this.minutes, this.seconds);
        this.seconds += 1;
        
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }
  
  const clock = new Clock();
  console.log(clock)