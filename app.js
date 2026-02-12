// ========== 英検3級頻出単語データ ==========
const WORDS = [
  // 感情・状態
  { word: "surprised", japanese: "驚いた", emoji: "😲", category: "emotion" },
  { word: "nervous", japanese: "緊張した", emoji: "😰", category: "emotion" },
  { word: "excited", japanese: "わくわくした", emoji: "🤩", category: "emotion" },
  { word: "proud", japanese: "誇りに思う", emoji: "😊", category: "emotion" },
  { word: "worried", japanese: "心配した", emoji: "😟", category: "emotion" },
  { word: "popular", japanese: "人気のある", emoji: "⭐", category: "emotion" },
  { word: "famous", japanese: "有名な", emoji: "🌟", category: "emotion" },
  { word: "special", japanese: "特別な", emoji: "✨", category: "emotion" },
  { word: "important", japanese: "重要な", emoji: "❗", category: "emotion" },
  { word: "necessary", japanese: "必要な", emoji: "🔑", category: "emotion" },

  // 日常・生活
  { word: "invite", japanese: "招待する", emoji: "💌", category: "daily" },
  { word: "prepare", japanese: "準備する", emoji: "📋", category: "daily" },
  { word: "believe", japanese: "信じる", emoji: "🙏", category: "daily" },
  { word: "forget", japanese: "忘れる", emoji: "💭", category: "daily" },
  { word: "arrive", japanese: "到着する", emoji: "🛬", category: "daily" },
  { word: "collect", japanese: "集める", emoji: "📦", category: "daily" },
  { word: "choose", japanese: "選ぶ", emoji: "👆", category: "daily" },
  { word: "carry", japanese: "運ぶ", emoji: "🧳", category: "daily" },
  { word: "foreign", japanese: "外国の", emoji: "🌍", category: "daily" },
  { word: "remember", japanese: "覚えている", emoji: "🧠", category: "daily" },

  // 学校・勉強
  { word: "subject", japanese: "科目", emoji: "📚", category: "school" },
  { word: "mistake", japanese: "間違い", emoji: "✏️", category: "school" },
  { word: "practice", japanese: "練習", emoji: "🎯", category: "school" },
  { word: "explain", japanese: "説明する", emoji: "💬", category: "school" },
  { word: "language", japanese: "言語", emoji: "🗣️", category: "school" },
  { word: "culture", japanese: "文化", emoji: "🎭", category: "school" },
  { word: "history", japanese: "歴史", emoji: "📜", category: "school" },
  { word: "science", japanese: "科学", emoji: "🔬", category: "school" },
  { word: "example", japanese: "例", emoji: "📌", category: "school" },
  { word: "exam", japanese: "試験", emoji: "📝", category: "school" },

  // 旅行・場所
  { word: "abroad", japanese: "海外へ", emoji: "✈️", category: "travel" },
  { word: "airport", japanese: "空港", emoji: "🛫", category: "travel" },
  { word: "island", japanese: "島", emoji: "🏝️", category: "travel" },
  { word: "village", japanese: "村", emoji: "🏘️", category: "travel" },
  { word: "museum", japanese: "博物館", emoji: "🏛️", category: "travel" },
  { word: "ticket", japanese: "切符", emoji: "🎫", category: "travel" },
  { word: "journey", japanese: "旅", emoji: "🗺️", category: "travel" },
  { word: "tourist", japanese: "観光客", emoji: "📸", category: "travel" },
  { word: "garden", japanese: "庭", emoji: "🌸", category: "travel" },
  { word: "corner", japanese: "角", emoji: "↪️", category: "travel" },

  // 自然・コミュニケーション
  { word: "weather", japanese: "天気", emoji: "🌤️", category: "nature" },
  { word: "nature", japanese: "自然", emoji: "🌿", category: "nature" },
  { word: "environment", japanese: "環境", emoji: "🌎", category: "nature" },
  { word: "temperature", japanese: "気温", emoji: "🌡️", category: "nature" },
  { word: "pollution", japanese: "汚染", emoji: "🏭", category: "nature" },
  { word: "message", japanese: "メッセージ", emoji: "💬", category: "communication" },
  { word: "advice", japanese: "アドバイス", emoji: "💡", category: "communication" },
  { word: "opinion", japanese: "意見", emoji: "🗨️", category: "communication" },
  { word: "promise", japanese: "約束", emoji: "🤝", category: "communication" },
  { word: "introduce", japanese: "紹介する", emoji: "👋", category: "communication" },

  // 英熟語
  { word: "look forward to", japanese: "〜を楽しみにする", emoji: "🤗", category: "phrase" },
  { word: "take care of", japanese: "〜の世話をする", emoji: "🤲", category: "phrase" },
  { word: "be interested in", japanese: "〜に興味がある", emoji: "🧐", category: "phrase" },
  { word: "be good at", japanese: "〜が得意だ", emoji: "💪", category: "phrase" },
  { word: "get along with", japanese: "〜と仲良くする", emoji: "🤝", category: "phrase" },
  { word: "give up", japanese: "あきらめる", emoji: "🏳️", category: "phrase" },
  { word: "pick up", japanese: "拾う・迎えに行く", emoji: "🫳", category: "phrase" },
  { word: "put on", japanese: "着る・身につける", emoji: "👗", category: "phrase" },
  { word: "take off", japanese: "脱ぐ・離陸する", emoji: "🛫", category: "phrase" },
  { word: "turn off", japanese: "消す・止める", emoji: "📴", category: "phrase" },
  { word: "turn on", japanese: "つける", emoji: "💡", category: "phrase" },
  { word: "look for", japanese: "〜を探す", emoji: "🔍", category: "phrase" },
  { word: "run out of", japanese: "〜を切らす", emoji: "😱", category: "phrase" },
  { word: "get up", japanese: "起きる", emoji: "⏰", category: "phrase" },
  { word: "come back", japanese: "戻る", emoji: "🔙", category: "phrase" },
  { word: "find out", japanese: "見つけ出す", emoji: "🕵️", category: "phrase" },
  { word: "hand in", japanese: "提出する", emoji: "📤", category: "phrase" },
  { word: "belong to", japanese: "〜に所属する", emoji: "🏠", category: "phrase" },
  { word: "depend on", japanese: "〜による", emoji: "⚖️", category: "phrase" },
  { word: "agree with", japanese: "〜に賛成する", emoji: "👍", category: "phrase" },
];

// ========== フィードバックメッセージ ==========
const CORRECT_MESSAGES = ["いいね！", "そのちょうし！", "ナイス！", "グッド！", "すばらしい！"];
const COMPLETE_MESSAGES = ["すごい！🎉", "かんぺき！✨", "やったね！🌟", "バッチリ！💪", "さすが！🌸"];
const WRONG_MESSAGES = ["おしい！", "もういちど！", "がんばって！", "ドンマイ！"];

// ========== 音声エンジン ==========
class SoundEngine {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  ensureContext() {
    if (!this.audioCtx) this.init();
    if (this.audioCtx.state === "suspended") this.audioCtx.resume();
  }

  playCorrectLetter(letterIndex) {
    this.ensureContext();
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.type = "sine";
    osc.frequency.value = 880 + letterIndex * 40;
    gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
    osc.start(this.audioCtx.currentTime);
    osc.stop(this.audioCtx.currentTime + 0.08);
  }

  playWrongLetter() {
    this.ensureContext();
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.type = "square";
    osc.frequency.setValueAtTime(150, this.audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, this.audioCtx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);
    osc.start(this.audioCtx.currentTime);
    osc.stop(this.audioCtx.currentTime + 0.12);
  }

  playWordComplete() {
    this.ensureContext();
    const notes = [523, 659, 784]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      const startTime = this.audioCtx.currentTime + i * 0.1;
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
      osc.start(startTime);
      osc.stop(startTime + 0.15);
    });
  }

  playGameOver() {
    this.ensureContext();
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      const startTime = this.audioCtx.currentTime + i * 0.15;
      const duration = i === 3 ? 0.4 : 0.15;
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  }

  speakWord(word, japanese, onEnd) {
    if (!("speechSynthesis" in window)) return;
    // 前の発音が残っていたらキャンセル
    speechSynthesis.cancel();

    const voices = speechSynthesis.getVoices();
    const isFemale = (v) => /female|samantha|karen|victoria|fiona|moira|tessa/i.test(v.name);

    // 英語発音
    const enUtterance = new SpeechSynthesisUtterance(word);
    enUtterance.lang = "en-US";
    enUtterance.rate = 0.85;
    enUtterance.pitch = 1.0;
    enUtterance.volume = 1.0;
    const enVoice =
      voices.find(v => v.lang.startsWith("en") && isFemale(v) && v.localService) ||
      voices.find(v => v.lang.startsWith("en") && isFemale(v)) ||
      voices.find(v => v.lang.startsWith("en") && v.localService) ||
      voices.find(v => v.lang.startsWith("en"));
    if (enVoice) enUtterance.voice = enVoice;

    // 英語発音が終わったら日本語の意味を読み上げ
    enUtterance.onend = () => {
      const jaUtterance = new SpeechSynthesisUtterance(japanese);
      jaUtterance.lang = "ja-JP";
      jaUtterance.rate = 1.0;
      jaUtterance.pitch = 1.1;
      jaUtterance.volume = 1.0;
      const jaVoice =
        voices.find(v => v.lang.startsWith("ja") && v.localService) ||
        voices.find(v => v.lang.startsWith("ja"));
      if (jaVoice) jaUtterance.voice = jaVoice;
      if (onEnd) {
        jaUtterance.onend = onEnd;
        jaUtterance.onerror = onEnd;
      }
      speechSynthesis.speak(jaUtterance);
    };
    enUtterance.onerror = () => { if (onEnd) onEnd(); };

    speechSynthesis.speak(enUtterance);
  }
}

// ========== ゲームクラス ==========
class Game {
  constructor() {
    this.sound = new SoundEngine();
    this.words = [];
    this.currentIndex = 0;
    this.currentLetterPos = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.wrongAttemptsThisWord = 0;
    this.wordStartTime = 0;
    this.wordsToReview = [];
    this.wordResults = []; // 各単語のスコア内訳
    this.hintUsedThisWord = false;
    this.timerInterval = null;
    this.timeLeft = 30;
    this.TIME_LIMIT = 30;

    // DOM要素
    this.els = {
      startScreen: document.getElementById("startScreen"),
      gameScreen: document.getElementById("gameScreen"),
      gameOverScreen: document.getElementById("gameOverScreen"),
      scoreValue: document.getElementById("scoreValue"),
      streakDisplay: document.getElementById("streakDisplay"),
      progressText: document.getElementById("progressText"),
      emojiDisplay: document.getElementById("emojiDisplay"),
      japaneseHint: document.getElementById("japaneseHint"),
      letterBoxes: document.getElementById("letterBoxes"),
      feedback: document.getElementById("feedback"),
      scorePopup: document.getElementById("scorePopup"),
      progressFill: document.getElementById("progressFill"),
      hiddenInput: document.getElementById("hiddenInput"),
      finalScore: document.getElementById("finalScore"),
      finalStats: document.getElementById("finalStats"),
      reviewSection: document.getElementById("reviewSection"),
      gameArea: document.getElementById("gameArea"),
      timerDisplay: document.getElementById("timerDisplay"),
      timerFill: document.getElementById("timerFill"),
      retryBtn: document.getElementById("retryBtn"),
      fullRetryBtn: document.getElementById("fullRetryBtn"),
    };
  }

  // Fisher-Yates シャッフル
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  showScreen(screen) {
    this.els.startScreen.classList.remove("active");
    this.els.gameScreen.classList.remove("active");
    this.els.gameOverScreen.classList.remove("active");
    screen.classList.add("active");
  }

  start(reviewWords = null) {
    this.sound.ensureContext();
    if (reviewWords && reviewWords.length > 0) {
      this.words = this.shuffle(reviewWords); // 復習モード: 指定された単語のみ
    } else {
      this.words = this.shuffle(WORDS).slice(0, 20); // 通常モード: 20問出題
    }
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.wordsToReview = [];
    this.wordResults = [];
    this.totalBasePoints = 0;
    this.totalSpeedBonus = 0;
    this.totalComboBonus = 0;
    this.totalErrorPenalty = 0;
    this.totalHintPenalty = 0;

    this.els.scoreValue.textContent = "0";
    this.updateStreakDisplay();
    this.showScreen(this.els.gameScreen);
    this.loadWord();
    this.focusInput();
  }

  loadWord() {
    const word = this.words[this.currentIndex];
    this.wrongAttemptsThisWord = 0;
    this.hintUsedThisWord = false;
    this.wordStartTime = Date.now();

    // 絵文字
    this.els.emojiDisplay.textContent = word.emoji;

    // 日本語ヒント
    this.els.japaneseHint.textContent = word.japanese;

    // 問題番号
    this.els.progressText.textContent = `${this.currentIndex + 1}/${this.words.length}`;

    // プログレスバー
    const progress = (this.currentIndex / this.words.length) * 100;
    this.els.progressFill.style.width = `${progress}%`;

    // フィードバッククリア
    this.els.feedback.textContent = "";

    // 文字ボックス生成
    this.els.letterBoxes.innerHTML = "";
    for (let i = 0; i < word.word.length; i++) {
      const char = word.word[i];
      const isSpace = char === " ";

      const box = document.createElement("div");
      box.className = "letter-box";
      box.dataset.index = i;

      if (isSpace) {
        // スペースは自動的に埋める（入力不要）
        box.classList.add("space-box");
        box.textContent = " ";
      } else if (i === 0) {
        // 1文字目はヒント
        box.classList.add("hint");
        box.textContent = char;
      } else {
        // 2文字目以降は薄く答えの文字を表示
        box.textContent = char;
        box.classList.add("ghost-letter");
      }

      this.els.letterBoxes.appendChild(box);
    }

    // 最初のアクティブ文字を設定（スペースをスキップ）
    this.currentLetterPos = 1;
    this.skipSpaces();
    if (this.currentLetterPos < word.word.length) {
      const boxes = this.els.letterBoxes.children;
      boxes[this.currentLetterPos].classList.add("active");
    }

    // ネイティブ発音: 英語 → 日本語の意味
    this.sound.speakWord(word.word, word.japanese, () => this.focusInput());

    // タイマー開始
    this.startTimer();

    // フォーカス設定
    this.focusInput();
  }

  startTimer() {
    this.stopTimer();
    this.timeLeft = this.TIME_LIMIT;
    this.updateTimerDisplay();
    this.els.timerFill.classList.remove("timer-danger");

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      // 残り5秒で赤く
      if (this.timeLeft <= 5) {
        this.els.timerFill.classList.add("timer-danger");
      }

      // 時間切れ
      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.timeUp();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    this.els.timerDisplay.textContent = `${this.timeLeft}秒`;
    const percent = (this.timeLeft / this.TIME_LIMIT) * 100;
    this.els.timerFill.style.width = `${percent}%`;
  }

  timeUp() {
    const currentWord = this.words[this.currentIndex];
    const boxes = this.els.letterBoxes.children;

    // 残りの文字をすべて表示（不正解として）
    for (let i = this.currentLetterPos; i < currentWord.word.length; i++) {
      boxes[i].textContent = currentWord.word[i];
      boxes[i].classList.remove("active", "ghost-letter");
      if (currentWord.word[i] !== " ") {
        boxes[i].classList.add("timeout");
      }
    }

    this.showFeedback("⏰ 時間切れ！", "#ff8b94");
    this.sound.playWrongLetter();

    // 内訳を記録（時間切れ）
    this.wordResults.push({
      word: currentWord.word,
      emoji: currentWord.emoji,
      japanese: currentWord.japanese,
      score: 0,
      basePoints: 0,
      speedBonus: 0,
      comboBonus: 0,
      errorPenalty: 0,
      hintPenalty: 0,
      errors: this.wrongAttemptsThisWord,
      time: this.TIME_LIMIT,
      timedOut: true,
    });

    // 復習リストに追加
    if (!this.wordsToReview.includes(currentWord)) {
      this.wordsToReview.push(currentWord);
    }

    // ストリークリセット
    this.streak = 0;
    this.updateStreakDisplay();

    // 次の問題へ
    this.currentIndex++;
    if (this.currentIndex >= this.words.length) {
      setTimeout(() => this.endGame(), 1500);
    } else {
      setTimeout(() => this.loadWord(), 1500);
    }
  }

  handleKeypress(key) {
    if (!/^[a-z ]$/.test(key)) return;

    this.totalKeystrokes++;
    const currentWord = this.words[this.currentIndex];
    const expectedLetter = currentWord.word[this.currentLetterPos];
    const boxes = this.els.letterBoxes.children;

    if (key === expectedLetter) {
      // 正解
      this.correctKeystrokes++;
      this.sound.playCorrectLetter(this.currentLetterPos);

      // 文字ボックスを埋める
      const box = boxes[this.currentLetterPos];
      box.textContent = key;
      box.classList.remove("active", "extra-hint", "ghost-letter");
      box.classList.add("correct");

      this.currentLetterPos++;

      // スペースをスキップ
      this.skipSpaces();

      // 次の文字ボックスをアクティブに
      if (this.currentLetterPos < currentWord.word.length) {
        boxes[this.currentLetterPos].classList.add("active");
        // ランダムに褒める（3文字に1回くらい）
        if (Math.random() < 0.3) {
          this.showFeedback(this.randomFrom(CORRECT_MESSAGES), "#5ec49e");
        }
      }

      // 単語完成
      if (this.currentLetterPos >= currentWord.word.length) {
        this.completeWord();
      }
    } else {
      // 不正解
      this.wrongAttemptsThisWord++;
      this.sound.playWrongLetter();

      // シェイク
      const box = boxes[this.currentLetterPos];
      box.classList.remove("wrong");
      void box.offsetWidth; // reflow
      box.classList.add("wrong");
      setTimeout(() => box.classList.remove("wrong"), 400);

      // フィードバック
      this.showFeedback(this.randomFrom(WRONG_MESSAGES), "#ff8b94");

      // ストリークリセット
      this.streak = 0;
      this.updateStreakDisplay();

      // 3回不正解で追加ヒント（正解の文字を表示し続ける + 答え表示）
      if (this.wrongAttemptsThisWord >= 3) {
        if (!this.hintUsedThisWord) {
          this.hintUsedThisWord = true;
        }
        this.showFeedback(`💡 答え: ${currentWord.word}`, "#b8d4e3");
        box.textContent = expectedLetter;
        box.classList.add("extra-hint");
      }
    }
  }

  completeWord() {
    this.stopTimer();
    const currentWord = this.words[this.currentIndex];
    const timeTaken = (Date.now() - this.wordStartTime) / 1000;

    // スコア計算
    const basePoints = currentWord.word.length * 20;
    const speedBonus = Math.max(0, Math.floor((15 - timeTaken) * 10));
    const errorPenalty = this.wrongAttemptsThisWord * 15;
    const hintPenalty = this.hintUsedThisWord ? 30 : 0;
    this.streak++;
    if (this.streak > this.bestStreak) this.bestStreak = this.streak;
    const comboBonus = Math.min(this.streak, 10) * 5;

    const wordScore = Math.max(0, basePoints + speedBonus - errorPenalty - hintPenalty + comboBonus);
    this.score += wordScore;

    // 内訳を記録
    this.totalBasePoints += basePoints;
    this.totalSpeedBonus += speedBonus;
    this.totalComboBonus += comboBonus;
    this.totalErrorPenalty += errorPenalty;
    this.totalHintPenalty += hintPenalty;
    this.wordResults.push({
      word: currentWord.word,
      emoji: currentWord.emoji,
      japanese: currentWord.japanese,
      score: wordScore,
      basePoints,
      speedBonus,
      comboBonus,
      errorPenalty,
      hintPenalty,
      errors: this.wrongAttemptsThisWord,
      time: Math.round(timeTaken * 10) / 10,
      timedOut: false,
    });

    // 復習リストに追加（3回以上不正解）
    if (this.wrongAttemptsThisWord >= 3) {
      this.wordsToReview.push(currentWord);
    }

    // UI更新
    this.els.scoreValue.textContent = this.score;
    this.updateStreakDisplay();
    this.showFeedback(this.randomFrom(COMPLETE_MESSAGES), "#ff85a2");
    this.showScorePopup(`+${wordScore}`);
    this.sound.playWordComplete();
    this.showSparkles();

    // 次の問題へ
    this.currentIndex++;
    if (this.currentIndex >= this.words.length) {
      setTimeout(() => this.endGame(), 1200);
    } else {
      setTimeout(() => this.loadWord(), 1200);
    }
  }

  endGame() {
    this.stopTimer();
    this.sound.playGameOver();

    // プログレスバー100%
    this.els.progressFill.style.width = "100%";

    const accuracy = this.totalKeystrokes > 0
      ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100)
      : 0;

    // 前回スコアとの比較（localStorage）
    const prevScore = parseInt(localStorage.getItem("eiken3_prevScore") || "0", 10);
    const prevAccuracy = parseInt(localStorage.getItem("eiken3_prevAccuracy") || "0", 10);
    const prevBestStreak = parseInt(localStorage.getItem("eiken3_prevBestStreak") || "0", 10);
    const isFirstTime = !localStorage.getItem("eiken3_prevScore");

    // 今回のスコアを保存
    localStorage.setItem("eiken3_prevScore", String(this.score));
    localStorage.setItem("eiken3_prevAccuracy", String(accuracy));
    localStorage.setItem("eiken3_prevBestStreak", String(this.bestStreak));

    // 差分表示ヘルパー
    const diffBadge = (current, prev, unit = "") => {
      if (isFirstTime) return "";
      const diff = current - prev;
      if (diff > 0) return `<span class="diff-up">+${diff}${unit}</span>`;
      if (diff < 0) return `<span class="diff-down">${diff}${unit}</span>`;
      return `<span class="diff-same">±0${unit}</span>`;
    };

    // スコア表示 + 前回比
    this.els.finalScore.innerHTML = `⭐ ${this.score}点 ${diffBadge(this.score, prevScore)}`;

    // 統計
    this.els.finalStats.innerHTML = `
      <div class="stat-item">
        <div class="stat-label">正確さ</div>
        <div class="stat-value">${accuracy}% ${diffBadge(accuracy, prevAccuracy, "%")}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">最大コンボ</div>
        <div class="stat-value">🔥 ${this.bestStreak} ${diffBadge(this.bestStreak, prevBestStreak)}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">問題数</div>
        <div class="stat-value">${this.words.length}問</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">正しいタイプ</div>
        <div class="stat-value">${this.correctKeystrokes}文字</div>
      </div>
    `;

    // 得点の内訳
    const breakdownEl = document.getElementById("scoreBreakdown");
    breakdownEl.innerHTML = `
      <div class="breakdown-title">得点の内訳</div>
      <div class="breakdown-summary">
        <div class="breakdown-row">
          <span class="breakdown-label">基本点</span>
          <span class="breakdown-value">${this.totalBasePoints}</span>
        </div>
        <div class="breakdown-row">
          <span class="breakdown-label">スピードボーナス</span>
          <span class="breakdown-value positive">+${this.totalSpeedBonus}</span>
        </div>
        <div class="breakdown-row">
          <span class="breakdown-label">コンボボーナス</span>
          <span class="breakdown-value positive">+${this.totalComboBonus}</span>
        </div>
        <div class="breakdown-row">
          <span class="breakdown-label">ミスペナルティ</span>
          <span class="breakdown-value negative">${this.totalErrorPenalty > 0 ? "-" + this.totalErrorPenalty : "0"}</span>
        </div>
        <div class="breakdown-row">
          <span class="breakdown-label">ヒントペナルティ</span>
          <span class="breakdown-value negative">${this.totalHintPenalty > 0 ? "-" + this.totalHintPenalty : "0"}</span>
        </div>
        <div class="breakdown-row breakdown-total">
          <span class="breakdown-label">合計</span>
          <span class="breakdown-value">${this.score}点</span>
        </div>
      </div>
    `;

    // 各単語の結果テーブル
    const detailEl = document.getElementById("wordDetail");
    const rows = this.wordResults.map((r, i) => {
      const status = r.timedOut
        ? '<span class="word-status timeout-badge">時間切れ</span>'
        : r.errors === 0
          ? '<span class="word-status perfect-badge">完ぺき</span>'
          : r.errors >= 3
            ? '<span class="word-status hint-badge">ヒント</span>'
            : `<span class="word-status miss-badge">ミス${r.errors}</span>`;
      return `
        <div class="word-row ${r.timedOut ? "word-row-timeout" : r.errors === 0 ? "word-row-perfect" : ""}">
          <span class="word-num">${i + 1}</span>
          <span class="word-emoji">${r.emoji}</span>
          <span class="word-name">${r.word}</span>
          <span class="word-jp">${r.japanese}</span>
          ${status}
          <span class="word-score">${r.score}点</span>
        </div>`;
    }).join("");

    detailEl.innerHTML = `
      <div class="detail-title">単語ごとの結果</div>
      <div class="word-list-detail">${rows}</div>
    `;

    // 「にがて問題を練習する！」ボタンの表示制御
    const hasReviewWords = this.wordResults.some(r => r.errors > 0 || r.timedOut);
    if (hasReviewWords) {
      this.els.retryBtn.style.display = "inline-block";
    } else {
      this.els.retryBtn.style.display = "none";
    }

    // 復習セクション
    if (this.wordsToReview.length > 0) {
      this.els.reviewSection.innerHTML = `
        <div class="review-title">もう一度練習しよう！</div>
        <div class="review-list">
          ${this.wordsToReview.map(w =>
            `<span class="review-word">${w.emoji} ${w.word}（${w.japanese}）</span>`
          ).join("")}
        </div>
      `;
    } else {
      this.els.reviewSection.innerHTML = `
        <div class="review-title">🌟 全問クリア！すごいね！</div>
      `;
    }

    this.showScreen(this.els.gameOverScreen);
  }

  // スペースをスキップして次の入力位置に進む
  skipSpaces() {
    const currentWord = this.words[this.currentIndex];
    while (this.currentLetterPos < currentWord.word.length && currentWord.word[this.currentLetterPos] === " ") {
      const boxes = this.els.letterBoxes.children;
      boxes[this.currentLetterPos].classList.add("correct", "space-box");
      boxes[this.currentLetterPos].classList.remove("ghost-letter");
      this.currentLetterPos++;
    }
  }

  // ========== 復習用単語取得 ==========

  getReviewWords() {
    // 「完ぺき」でなかった単語（errors > 0 または時間切れ）を返す
    const reviewWordNames = this.wordResults
      .filter(r => r.errors > 0 || r.timedOut)
      .map(r => r.word);
    return WORDS.filter(w => reviewWordNames.includes(w.word));
  }

  // ========== ヘルパー ==========

  showFeedback(text, color) {
    this.els.feedback.textContent = text;
    this.els.feedback.style.color = color || "#ff85a2";
    clearTimeout(this._feedbackTimer);
    this._feedbackTimer = setTimeout(() => {
      this.els.feedback.textContent = "";
    }, 1500);
  }

  showScorePopup(text) {
    this.els.scorePopup.textContent = text;
    this.els.scorePopup.classList.remove("show");
    void this.els.scorePopup.offsetWidth;
    this.els.scorePopup.classList.add("show");
    setTimeout(() => this.els.scorePopup.classList.remove("show"), 1000);
  }

  showSparkles() {
    const container = document.createElement("div");
    container.className = "sparkle-container";
    document.body.appendChild(container);

    const stars = ["⭐", "✨", "🌟", "💫", "🌸"];
    for (let i = 0; i < 8; i++) {
      const star = document.createElement("div");
      star.className = "sparkle-star";
      star.textContent = stars[Math.floor(Math.random() * stars.length)];
      star.style.left = `${20 + Math.random() * 60}%`;
      star.style.top = `${20 + Math.random() * 40}%`;
      star.style.animationDelay = `${Math.random() * 0.3}s`;
      star.style.fontSize = `${16 + Math.random() * 20}px`;
      container.appendChild(star);
    }

    setTimeout(() => container.remove(), 1200);
  }

  updateStreakDisplay() {
    if (this.streak >= 3) {
      this.els.streakDisplay.textContent = `🔥 ${this.streak}コンボ`;
    } else if (this.streak > 0) {
      this.els.streakDisplay.textContent = `${this.streak}コンボ`;
    } else {
      this.els.streakDisplay.textContent = "";
    }
  }

  randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  focusInput() {
    const input = this.els.hiddenInput;
    input.value = "";
    input.focus();
  }
}

// ========== 初期化 ==========
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const hiddenInput = document.getElementById("hiddenInput");
  const tapHint = document.getElementById("tapHint");
  let isGameScreen = false;
  let isComposing = false; // IME変換中フラグ

  // 音声合成のvoicesをプリロード
  if ("speechSynthesis" in window) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  // iOS対応: ボタンクリック（ユーザーアクション）の中でフォーカスを設定
  const focusAndStart = (reviewWords) => {
    hiddenInput.focus(); // ユーザーアクションのコンテキスト内でフォーカス（iOS必須）
    game.start(reviewWords);
  };

  // スタートボタン
  document.getElementById("startBtn").addEventListener("click", () => {
    focusAndStart();
  });

  // にがて問題を練習するボタン
  document.getElementById("retryBtn").addEventListener("click", () => {
    const reviewWords = game.getReviewWords();
    focusAndStart(reviewWords);
  });

  // 全問チャレンジボタン
  document.getElementById("fullRetryBtn").addEventListener("click", () => {
    focusAndStart();
  });

  // ゲーム画面の表示状態を監視
  const observer = new MutationObserver(() => {
    isGameScreen = document.getElementById("gameScreen").classList.contains("active");
  });
  observer.observe(document.getElementById("gameScreen"), { attributes: true, attributeFilter: ["class"] });

  // PC向け: documentレベルでキーボード入力をキャプチャ（フォーカス不要）
  document.addEventListener("keydown", (e) => {
    if (!isGameScreen) return;
    if (e.key === " " || (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key))) {
      e.preventDefault();
      game.handleKeypress(e.key === " " ? " " : e.key.toLowerCase());
    }
  });

  // モバイル向け: IME変換を追跡
  hiddenInput.addEventListener("compositionstart", () => { isComposing = true; });
  hiddenInput.addEventListener("compositionend", (e) => {
    isComposing = false;
    const text = e.data || "";
    for (const ch of text) {
      if (/^[a-zA-Z ]$/.test(ch)) {
        game.handleKeypress(ch.toLowerCase());
      }
    }
    hiddenInput.value = "";
  });

  // モバイル向け: hiddenInputのinputイベント
  hiddenInput.addEventListener("input", () => {
    if (isComposing) return;
    const value = hiddenInput.value;
    if (value.length > 0) {
      for (const ch of value) {
        if (/^[a-zA-Z ]$/.test(ch)) {
          game.handleKeypress(ch.toLowerCase());
        }
      }
      hiddenInput.value = "";
    }
  });

  // キーボード表示/非表示の検出（タップヒント制御）
  hiddenInput.addEventListener("focus", () => {
    if (tapHint) tapHint.style.display = "none";
  });
  hiddenInput.addEventListener("blur", () => {
    if (tapHint && isGameScreen) tapHint.style.display = "";
  });

  // iOS Chrome対応: labelのfor属性だけではキーボードが出ないため、
  // gameAreaのtouchendで直接focusする
  document.getElementById("gameArea").addEventListener("touchend", (e) => {
    if (!isGameScreen) return;
    // ボタン等のタッチは除外
    if (e.target.tagName === "BUTTON" || e.target.tagName === "A") return;
    e.preventDefault();
    hiddenInput.focus();
  });
});
