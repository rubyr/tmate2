import { Thing, Streak, Decision } from "./types";

class DataTracker {
  currentStreak: Streak = { id: "", length: 0 };
  longestStreaks: Streak[] = [];

  quickestDecisions: Decision[] = [];

  saved: Thing[] = [];

  constructor(data?: DataTracker) {
    if (data) {
      this.currentStreak = { ...data.currentStreak };
      this.longestStreaks = [...data.longestStreaks];
      this.quickestDecisions = [...data.quickestDecisions];
    }
  }

  updateStreak(article: Thing) {
    const { name } = article;
    if (this.currentStreak.id === name) {
      this.currentStreak.length++;
    } else {
      this.longestStreaks.push(this.currentStreak);

      this.longestStreaks = this.longestStreaks
        .sort((a, b) => b.length - a.length)
        .filter((streak) => streak.length > 0);
      if (this.longestStreaks.length > 10) this.longestStreaks.pop();

      this.currentStreak = { id: name, length: 1 };
    }
  }

  addDecision(decision: Decision) {
    this.quickestDecisions.push(decision);
    this.quickestDecisions = this.quickestDecisions.sort(
      (a, b) => a.time - b.time
    );
    if (this.quickestDecisions.length > 10) this.quickestDecisions.pop();
  }

  saveThing(thing: Thing) {
    const ind = this.saved.findIndex((t) => t.name === thing.name);
    if (ind === -1) {
      this.saved.unshift(thing);
    } else {
      this.saved.splice(ind, 1);
    }
  }
}

export default DataTracker;
