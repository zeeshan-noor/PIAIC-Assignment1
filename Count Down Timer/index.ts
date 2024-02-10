import chalk from "chalk";
import * as inquirer from "inquirer";

interface ICountdownTimer {
  targetTime: number;
}

class CountdownTimer {
  private targetTime: number;
  private intervalId: number | null;

  constructor(options: ICountdownTimer) {
    this.targetTime = options.targetTime;
    this.intervalId = null;
  }

  private updateTimerDisplay(): void {
    const currentTime = new Date().getTime();
    const timeDifference = this.targetTime - currentTime;

    if (timeDifference <= 0) {
      this.stopTimer();
      console.log(chalk.red("Countdown expired!"));
    } else {
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      console.log(chalk.blue(formattedTime));
    }
  }

  public startTimer(): void {
    this.updateTimerDisplay();

    this.intervalId = setInterval(() => {
      this.updateTimerDisplay();
    }, 1000) as any;
  }

  public stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

inquirer
  .prompt([
    {
      type: "number",
      name: "countdownDuration",
      message: "Enter countdown duration in seconds:",
      validate: (value) => {
        return value > 0 ? true : "Please enter a valid positive number.";
      },
    },
  ])
  .then((answers) => {
    const countdownDurationInSeconds: number = answers.countdownDuration;
    const targetTime: number =
      new Date().getTime() + countdownDurationInSeconds * 1000;

    const countdownTimerOptions: ICountdownTimer = {
      targetTime: targetTime,
    };

    const countdownTimer = new CountdownTimer(countdownTimerOptions);
    countdownTimer.startTimer();
  });
