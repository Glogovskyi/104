/* =========================================================
   ЕЛЕМЕНТИ ГРИ
========================================================= */

const stacksElement =
    document.getElementById("stacks");

const lowerButton =
    document.getElementById("lower");

const higherButton =
    document.getElementById("higher");

const scoreElement =
    document.getElementById("score");

const cardsLeftElement =
    document.getElementById("cardsLeft");

const stacksLeftElement =
    document.getElementById("stacksLeft");

const messageElement =
    document.getElementById("message");

const deckVisual =
    document.getElementById("deckVisual");

const deckCount =
    document.getElementById("deckCount");

const gameDifficultyIndicator =
    document.getElementById(
        "gameDifficultyIndicator"
    );

const gameDifficultyValue =
    document.getElementById(
        "gameDifficultyValue"
    );


/* =========================================================
   ЕЛЕМЕНТИ РЕЗУЛЬТАТУ
========================================================= */

const gameResultOverlay =
    document.getElementById(
        "gameResultOverlay"
    );

const gameResultTitle =
    document.getElementById(
        "gameResultTitle"
    );

const gameResultReason =
    document.getElementById(
        "gameResultReason"
    );

const resultScoreLabel =
    document.getElementById(
        "resultScoreLabel"
    );

const resultScore =
    document.getElementById(
        "resultScore"
    );

const resultCardsLabel =
    document.getElementById(
        "resultCardsLabel"
    );

const resultCards =
    document.getElementById(
        "resultCards"
    );

const resultLostStacksLabel =
    document.getElementById(
        "resultLostStacksLabel"
    );

const resultLostStacks =
    document.getElementById(
        "resultLostStacks"
    );

const resultRemainingCardsLabel =
    document.getElementById(
        "resultRemainingCardsLabel"
    );

const resultRemainingCards =
    document.getElementById(
        "resultRemainingCards"
    );

const resultCorrectMovesLabel =
    document.getElementById(
        "resultCorrectMovesLabel"
    );

const resultCorrectMoves =
    document.getElementById(
        "resultCorrectMoves"
    );

const resultWrongMovesLabel =
    document.getElementById(
        "resultWrongMovesLabel"
    );

const resultWrongMoves =
    document.getElementById(
        "resultWrongMoves"
    );

const nextGameButton =
    document.getElementById(
        "nextGameButton"
    );

const changeDeckButton =
    document.getElementById(
        "changeDeckButton"
    );

const resultLobbyButton =
    document.getElementById(
        "resultLobbyButton"
    );


/* =========================================================
   ЕЛЕМЕНТИ МЕНЮ
========================================================= */

const mainMenu =
    document.getElementById("mainMenu");

const deckMenu =
    document.getElementById("deckMenu");

const profileScreen =
    document.getElementById("profileScreen");

const settingsScreen =
    document.getElementById("settingsScreen");

const gameScreen =
    document.getElementById("gameScreen");

const achievementsScreen =
    document.getElementById(
        "achievementsScreen"
    );

const howToPlayScreen =
    document.getElementById(
        "howToPlayScreen"
    );


const playButton =
    document.getElementById("playButton");

const howToPlayButton =
    document.getElementById(
        "howToPlayButton"
    );

const profileButton =
    document.getElementById(
        "profileButton"
    );

const settingsButton =
    document.getElementById(
        "settingsButton"
    );

const logoutButton =
    document.getElementById("logoutButton");


const continueGameArea =
    document.getElementById(
        "continueGameArea"
    );

const continueGameButton =
    document.getElementById(
        "continueGameButton"
    );

const continueGameTitle =
    document.getElementById(
        "continueGameTitle"
    );

const continueGameDescription =
    document.getElementById(
        "continueGameDescription"
    );


const deck36Button =
    document.getElementById(
        "deck36Button"
    );

const deck54Button =
    document.getElementById(
        "deck54Button"
    );

const deck36Difficulty =
    document.getElementById(
        "deck36Difficulty"
    );

const deck54Difficulty =
    document.getElementById(
        "deck54Difficulty"
    );

const backToMenuButton =
    document.getElementById(
        "backToMenuButton"
    );


const backFromProfileButton =
    document.getElementById(
        "backFromProfileButton"
    );


const backFromSettingsButton =
    document.getElementById(
        "backFromSettingsButton"
    );


const backFromGameButton =
    document.getElementById(
        "backFromGameButton"
    );


const backFromAchievementsButton =
    document.getElementById(
        "backFromAchievementsButton"
    );


const backFromHowToPlayButton =
    document.getElementById(
        "backFromHowToPlayButton"
    );


const openAchievementsButton =
    document.getElementById(
        "openAchievementsButton"
    );


/* =========================================================
   ПРОФІЛЬ
========================================================= */

const nicknameInput =
    document.getElementById(
        "nicknameInput"
    );

const saveNicknameButton =
    document.getElementById(
        "saveNicknameButton"
    );

const games36Element =
    document.getElementById(
        "games36"
    );

const average36Element =
    document.getElementById(
        "average36"
    );

const best36Element =
    document.getElementById(
        "best36"
    );

const games54Element =
    document.getElementById(
        "games54"
    );

const average54Element =
    document.getElementById(
        "average54"
    );

const best54Element =
    document.getElementById(
        "best54"
    );

const totalCardsUsedElement =
    document.getElementById(
        "totalCardsUsed"
    );

const correctMovesElement =
    document.getElementById(
        "correctMoves"
    );

const wrongMovesElement =
    document.getElementById(
        "wrongMoves"
    );

const lostStacksElement =
    document.getElementById(
        "lostStacks"
    );

const achievementsProgress =
    document.getElementById(
        "achievementsProgress"
    );


/* =========================================================
   ДОСЯГНЕННЯ
========================================================= */

const achievementsList =
    document.getElementById(
        "achievementsList"
    );

const achievementsCount =
    document.getElementById(
        "achievementsCount"
    );


/* =========================================================
   НАЛАШТУВАННЯ
========================================================= */

const soundToggle =
    document.getElementById(
        "soundToggle"
    );

const volumeSlider =
    document.getElementById(
        "volumeSlider"
    );

const volumeValue =
    document.getElementById(
        "volumeValue"
    );

const animationToggle =
    document.getElementById(
        "animationToggle"
    );

const difficultyToggle =
    document.getElementById(
        "difficultyToggle"
    );

const themeSelect =
    document.getElementById(
        "themeSelect"
    );

const cardBackSelect =
    document.getElementById(
        "cardBackSelect"
    );

const languageSelect =
    document.getElementById(
        "languageSelect"
    );


/* =========================================================
   ПІДТВЕРДЖЕННЯ ВИХОДУ
========================================================= */

const exitConfirmOverlay =
    document.getElementById(
        "exitConfirmOverlay"
    );

const exitConfirmTitle =
    document.getElementById(
        "exitConfirmTitle"
    );

const exitConfirmText =
    document.getElementById(
        "exitConfirmText"
    );

const confirmExitButton =
    document.getElementById(
        "confirmExitButton"
    );

const cancelExitButton =
    document.getElementById(
        "cancelExitButton"
    );


/* =========================================================
   TOAST
========================================================= */

const toastElement =
    document.getElementById("toast");

let toastTimer = null;


/* =========================================================
   МАСТІ
========================================================= */

const suits = [

    {
        symbol: "♥",
        color: "red"
    },

    {
        symbol: "♦",
        color: "red"
    },

    {
        symbol: "♣",
        color: "black"
    },

    {
        symbol: "♠",
        color: "black"
    }

];


/* =========================================================
   НАЗВИ КАРТ
========================================================= */

const cardNames = {

    11: "J",

    12: "Q",

    13: "K",

    14: "T"

};


/* =========================================================
   ЗМІННІ ГРИ
========================================================= */

let deck = [];

let stacks = [];

let selectedStack = null;

let gameOver = false;

let waitingForAnimation = false;

let currentDeckSize = 36;

let currentGameRecorded = false;

let currentGameStats = {

    correctMoves: 0,

    wrongMoves: 0,

    lostStacks: 0

};

let isRestoringGame = false;


/* =========================================================
   КОНСТАНТИ LOCAL STORAGE
========================================================= */

const STORAGE_KEYS = {

    profile:
        "higherLowerProfile",

    settings:
        "higherLowerSettings",

    savedGame:
        "higherLowerSavedGame",

    achievements:
        "higherLowerAchievements"

};


/* =========================================================
   AUDIO
========================================================= */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContext) {

            return null;

        }


        audioContext =
            new AudioContext();

    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }


    return audioContext;

}


function playTone(
    frequency,
    duration,
    type = "sine",
    volume = 0.06,
    delay = 0
) {

    const settings =
        getSettingsData();


    if (!settings.sound) {

        return;

    }


    const context =
        getAudioContext();


    if (!context) {

        return;

    }


    const oscillator =
        context.createOscillator();


    const gain =
        context.createGain();


    const finalVolume =
        Math.max(
            0,
            Math.min(
                1,
                volume *
                Number(settings.volume)
            )
        );


    oscillator.type =
        type;


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0,
        context.currentTime + delay
    );


    gain.gain.linearRampToValueAtTime(
        finalVolume,
        context.currentTime +
        delay +
        0.02
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        context.currentTime +
        delay +
        duration
    );


    oscillator.connect(gain);

    gain.connect(
        context.destination
    );


    oscillator.start(
        context.currentTime +
        delay
    );


    oscillator.stop(
        context.currentTime +
        delay +
        duration +
        0.02
    );

}


function playButtonSound() {

    playTone(
        440,
        0.06,
        "sine",
        0.035
    );

}


function playStackSelectSound() {

    playTone(
        520,
        0.08,
        "sine",
        0.045
    );

}


function playCardMoveSound() {

    playTone(
        330,
        0.09,
        "triangle",
        0.035
    );

}


function playCorrectSound() {

    playTone(
        620,
        0.12,
        "sine",
        0.055
    );


    playTone(
        820,
        0.16,
        "sine",
        0.05,
        0.09
    );

}


function playWrongSound() {

    playTone(
        180,
        0.18,
        "sawtooth",
        0.045
    );


    playTone(
        120,
        0.25,
        "sawtooth",
        0.035,
        0.12
    );

}


function playStackLostSound() {

    playTone(
        210,
        0.12,
        "triangle",
        0.035
    );


    playTone(
        145,
        0.18,
        "triangle",
        0.03,
        0.09
    );

}


function playFinishSound() {

    playTone(
        520,
        0.12,
        "sine",
        0.045
    );


    playTone(
        650,
        0.14,
        "sine",
        0.045,
        0.12
    );


    playTone(
        820,
        0.22,
        "sine",
        0.05,
        0.25
    );

}


function playAchievementSound() {

    playTone(
        660,
        0.1,
        "sine",
        0.045
    );


    playTone(
        880,
        0.14,
        "sine",
        0.05,
        0.08
    );


    playTone(
        1100,
        0.2,
        "sine",
        0.045,
        0.18
    );

}


/* =========================================================
   ЛОКАЛІЗАЦІЯ
========================================================= */

const translations = {

    uk: {

        mainTitle:
            "ВИЩА ЧИ НИЖЧА?",

        mainSubtitle:
            "Карткова гра",

        play:
            "ГРАТИ",

        howToPlay:
            "ЯК ГРАТИ",

        profile:
            "ПРОФІЛЬ",

        settings:
            "НАЛАШТУВАННЯ",

        logout:
            "ВИЙТИ",

        continue:
            "▶ ПРОДОВЖИТИ",

        savedGame:
            "ЗБЕРЕЖЕНА ГРА",

        savedGameDescription:
            "Є незавершена партія",

        chooseDeck:
            "ОБЕРИ КОЛОДУ",

        chooseDeckDescription:
            "З якою колодою хочеш грати?",

        deck36Description:
            "Від 6 до Т",

        deck54Description:
            "Від 2 до JOKER",

        back:
            "← НАЗАД",

        profileTitle:
            "ПРОФІЛЬ",

        nickname:
            "Нікнейм",

        nicknamePlaceholder:
            "Введи нікнейм",

        save:
            "ЗБЕРЕГТИ",

        statistics:
            "СТАТИСТИКА",

        games:
            "Ігор:",

        average:
            "Середній результат:",

        best:
            "Найкращий результат:",

        overallStatistics:
            "ЗАГАЛЬНА СТАТИСТИКА",

        totalCards:
            "Використано карт",

        correctMoves:
            "Правильні ходи",

        wrongMoves:
            "Неправильні ходи",

        lostStacks:
            "Втрачені стопки",

        achievements:
            "ДОСЯГНЕННЯ",

        achievementsShort:
            "🏆 ДОСЯГНЕННЯ",

        settingsTitle:
            "НАЛАШТУВАННЯ",

        language:
            "Мова",

        languageDescription:
            "Мова інтерфейсу",

        sound:
            "Звук",

        soundDescription:
            "Звукові ефекти гри",

        volume:
            "Гучність",

        volumeDescription:
            "Гучність звукових ефектів",

        animations:
            "Анімації",

        animationDescription:
            "Анімації карт",

        difficultyIndicator:
            "Індикатор складності",

        difficultyIndicatorDescription:
            "Показувати складність колоди",

        theme:
            "Тема",

        themeDescription:
            "Візуальний стиль гри",

        cardBack:
            "Сорочка карт",

        cardBackDescription:
            "Стиль зворотної сторони карт",

        themeClassic:
            "Класична",

        themeMidnight:
            "Північ",

        themeRoyal:
            "Королівська",

        themeCrimson:
            "Багряна",

        backEmbroidered:
            "Вишивка",

        backDiamond:
            "Ромби",

        backMinimal:
            "Мінімалістична",

        backRoyal:
            "Королівська",

        gameTitle:
            "🃏 Вища чи нижча?",

        menu:
            "← Меню",

        score:
            "Очки:",

        cardsLeft:
            "Карт залишилось:",

        stacksLeft:
            "Стопок залишилось:",

        chooseStack:
            "Вибери одну зі стопок.",

        lower:
            "⬇ Менше",

        higher:
            "⬆ Більше",

        preparing:
            "Розкладаємо карти...",

        selectedStack:
            "Стопка",

        choosePrediction:
            "Обери «Менше» або «Більше».",

        onlyHigher:
            "Можна тільки «Більше».",

        onlyLower:
            "Можна тільки «Менше».",

        correct:
            "Правильно!",

        wrong:
            "Неправильно!",

        cardAppeared:
            "Випала",

        stackLost:
            "Стопка втрачена.",

        allStacksLost:
            "Усі шість стопок втрачені!",

        deckFinished:
            "Колода закінчилася!",

        gameFinished:
            "Гру завершено!",

        result:
            "Результат:",

        cards:
            "карт.",

        resultTitle:
            "ГРУ ЗАВЕРШЕНО",

        resultScore:
            "Твій результат",

        resultCards:
            "Використано карт",

        resultLostStacks:
            "Втрачені стопки",

        resultRemainingCards:
            "Карт у колоді",

        resultCorrectMoves:
            "Правильні ходи",

        resultWrongMoves:
            "Неправильні ходи",

        nextGame:
            "🔄 Наступна гра",

        changeDeck:
            "🎴 Змінити колоду",

        lobby:
            "🏠 До лобі",

        difficulty:
            "Складність",

        easy:
            "Легка",

        normal:
            "Середня",

        hard:
            "Висока",

        extreme:
            "Дуже висока",

        howToPlayTitle:
            "ЯК ГРАТИ",

        rule1Title:
            "Обери стопку",

        rule1Text:
            "На столі є шість активних стопок. Обери одну, щоб зробити хід.",

        rule2Title:
            "Передбач карту",

        rule2Text:
            "Вгадай, чи наступна карта буде більшою або меншою за поточну.",

        rule3Title:
            "Правильний хід",

        rule3Text:
            "Якщо прогноз правильний, карта залишається у стопці, і ти можеш продовжувати.",

        rule4Title:
            "Неправильний хід",

        rule4Text:
            "Якщо прогноз неправильний, поточна стопка втрачається.",

        rule5Title:
            "Кінець гри",

        rule5Text:
            "Гра завершується, коли колода закінчується або всі шість стопок втрачені.",

        rule6Title:
            "Joker",

        rule6Text:
            "Joker має найвище значення. Після нього можна прогнозувати тільки «Менше».",

        exitConfirmTitle:
            "ВИЙТИ З ГРИ?",

        exitConfirmText:
            "Незавершена партія буде збережена. Ти зможеш продовжити її пізніше.",

        exit:
            "ВИЙТИ",

        cancel:
            "СКАСУВАТИ",

        achievementUnlocked:
            "Досягнення відкрито:",

        noSavedGame:
            "Збереженої гри немає."

    },


    en: {

        mainTitle:
            "HIGHER OR LOWER?",

        mainSubtitle:
            "Card game",

        play:
            "PLAY",

        howToPlay:
            "HOW TO PLAY",

        profile:
            "PROFILE",

        settings:
            "SETTINGS",

        logout:
            "EXIT",

        continue:
            "▶ CONTINUE",

        savedGame:
            "SAVED GAME",

        savedGameDescription:
            "An unfinished game is available",

        chooseDeck:
            "CHOOSE DECK",

        chooseDeckDescription:
            "Which deck do you want to play?",

        deck36Description:
            "From 6 to Ace",

        deck54Description:
            "From 2 to JOKER",

        back:
            "← BACK",

        profileTitle:
            "PROFILE",

        nickname:
            "Nickname",

        nicknamePlaceholder:
            "Enter nickname",

        save:
            "SAVE",

        statistics:
            "STATISTICS",

        games:
            "Games:",

        average:
            "Average score:",

        best:
            "Best result:",

        overallStatistics:
            "OVERALL STATISTICS",

        totalCards:
            "Cards used",

        correctMoves:
            "Correct moves",

        wrongMoves:
            "Wrong moves",

        lostStacks:
            "Stacks lost",

        achievements:
            "ACHIEVEMENTS",

        achievementsShort:
            "🏆 ACHIEVEMENTS",

        settingsTitle:
            "SETTINGS",

        language:
            "Language",

        languageDescription:
            "Interface language",

        sound:
            "Sound",

        soundDescription:
            "Game sound effects",

        volume:
            "Volume",

        volumeDescription:
            "Sound effect volume",

        animations:
            "Animations",

        animationDescription:
            "Card animations",

        difficultyIndicator:
            "Difficulty indicator",

        difficultyIndicatorDescription:
            "Show deck difficulty",

        theme:
            "Theme",

        themeDescription:
            "Visual style",

        cardBack:
            "Card back",

        cardBackDescription:
            "Card back style",

        themeClassic:
            "Classic",

        themeMidnight:
            "Midnight",

        themeRoyal:
            "Royal",

        themeCrimson:
            "Crimson",

        backEmbroidered:
            "Embroidered",

        backDiamond:
            "Diamond",

        backMinimal:
            "Minimal",

        backRoyal:
            "Royal",

        gameTitle:
            "🃏 Higher or Lower?",

        menu:
            "← Menu",

        score:
            "Score:",

        cardsLeft:
            "Cards left:",

        stacksLeft:
            "Stacks left:",

        chooseStack:
            "Choose one of the stacks.",

        lower:
            "⬇ Lower",

        higher:
            "⬆ Higher",

        preparing:
            "Dealing cards...",

        selectedStack:
            "Stack",

        choosePrediction:
            "Choose «Lower» or «Higher».",

        onlyHigher:
            "Only «Higher» is possible.",

        onlyLower:
            "Only «Lower» is possible.",

        correct:
            "Correct!",

        wrong:
            "Wrong!",

        cardAppeared:
            "The card is",

        stackLost:
            "The stack was lost.",

        allStacksLost:
            "All six stacks have been lost!",

        deckFinished:
            "The deck is empty!",

        gameFinished:
            "Game over!",

        result:
            "Result:",

        cards:
            "cards.",

        resultTitle:
            "GAME OVER",

        resultScore:
            "Your score",

        resultCards:
            "Cards used",

        resultLostStacks:
            "Stacks lost",

        resultRemainingCards:
            "Cards in deck",

        resultCorrectMoves:
            "Correct moves",

        resultWrongMoves:
            "Wrong moves",

        nextGame:
            "🔄 Next game",

        changeDeck:
            "🎴 Change deck",

        lobby:
            "🏠 Back to lobby",

        difficulty:
            "Difficulty",

        easy:
            "Easy",

        normal:
            "Normal",

        hard:
            "High",

        extreme:
            "Very high",

        howToPlayTitle:
            "HOW TO PLAY",

        rule1Title:
            "Choose a stack",

        rule1Text:
            "There are six active stacks on the table. Choose one to make a move.",

        rule2Title:
            "Predict the card",

        rule2Text:
            "Predict whether the next card will be higher or lower than the current card.",

        rule3Title:
            "Correct move",

        rule3Text:
            "If your prediction is correct, the card stays in the stack and you can continue.",

        rule4Title:
            "Wrong move",

        rule4Text:
            "If your prediction is wrong, the current stack is lost.",

        rule5Title:
            "End of game",

        rule5Text:
            "The game ends when the deck is empty or all six stacks are lost.",

        rule6Title:
            "Joker",

        rule6Text:
            "Joker has the highest value. After a Joker, only «Lower» is possible.",

        exitConfirmTitle:
            "LEAVE GAME?",

        exitConfirmText:
            "The unfinished game will be saved. You can continue it later.",

        exit:
            "LEAVE",

        cancel:
            "CANCEL",

        achievementUnlocked:
            "Achievement unlocked:",

        noSavedGame:
            "There is no saved game."

    }

};


/* =========================================================
   ПОТОЧНА МОВА
========================================================= */

function getCurrentLanguage() {

    const settings =
        getSettingsData();


    if (
        settings.language === "en"
    ) {

        return "en";

    }


    return "uk";

}


function t(key) {

    const language =
        getCurrentLanguage();


    return (
        translations[language][key] ||
        translations.uk[key] ||
        key
    );

}


/* =========================================================
   НАЗВИ ТЕМ
========================================================= */

function getThemeName(theme) {

    const names = {

        classic:
            "themeClassic",

        midnight:
            "themeMidnight",

        royal:
            "themeRoyal",

        crimson:
            "themeCrimson"

    };


    return t(
        names[theme] ||
        "themeClassic"
    );

}


function getCardBackName(style) {

    const names = {

        embroidered:
            "backEmbroidered",

        diamond:
            "backDiamond",

        minimal:
            "backMinimal",

        royal:
            "backRoyal"

    };


    return t(
        names[style] ||
        "backEmbroidered"
    );

}


/* =========================================================
   ОНОВЛЕННЯ МОВИ ІНТЕРФЕЙСУ
========================================================= */

function applyLanguage() {

    const language =
        getCurrentLanguage();


    document.documentElement.lang =
        language;


    document.title =
        language === "en"
            ? "Higher or Lower?"
            : "Вища чи нижча?";


    const setText =
        (id, key) => {

            const element =
                document.getElementById(id);

            if (element) {

                element.textContent =
                    t(key);

            }

        };


    setText(
        "mainTitle",
        "mainTitle"
    );

    setText(
        "mainSubtitle",
        "mainSubtitle"
    );

    setText(
        "playButton",
        "play"
    );

    setText(
        "howToPlayButton",
        "howToPlay"
    );

    setText(
        "profileButton",
        "profile"
    );

    setText(
        "settingsButton",
        "settings"
    );

    setText(
        "logoutButton",
        "logout"
    );

    setText(
        "continueGameTitle",
        "savedGame"
    );

    setText(
        "continueGameDescription",
        "savedGameDescription"
    );

    continueGameButton.textContent =
        t("continue");


    setText(
        "deckMenuTitle",
        "chooseDeck"
    );

    setText(
        "deckMenuDescription",
        "chooseDeckDescription"
    );


    document.getElementById(
        "deck36Title"
    ).textContent =
        language === "en"
            ? "36 CARDS"
            : "36 КАРТ";


    document.getElementById(
        "deck54Title"
    ).textContent =
        language === "en"
            ? "54 CARDS"
            : "54 КАРТИ";


    setText(
        "deck36Description",
        "deck36Description"
    );

    setText(
        "deck54Description",
        "deck54Description"
    );


    backToMenuButton.textContent =
        t("back");


    setText(
        "profileTitle",
        "profileTitle"
    );

    setText(
        "nicknameLabel",
        "nickname"
    );

    nicknameInput.placeholder =
        t("nicknamePlaceholder");

    saveNicknameButton.textContent =
        t("save");


    setText(
        "statisticsTitle",
        "statistics"
    );


    document.getElementById(
        "statistics36Title"
    ).textContent =
        language === "en"
            ? "36 CARDS"
            : "36 КАРТ";


    document.getElementById(
        "statistics54Title"
    ).textContent =
        language === "en"
            ? "54 CARDS"
            : "54 КАРТИ";


    setText(
        "gamesLabel36",
        "games"
    );

    setText(
        "gamesLabel54",
        "games"
    );

    setText(
        "averageLabel36",
        "average"
    );

    setText(
        "averageLabel54",
        "average"
    );

    setText(
        "bestLabel36",
        "best"
    );

    setText(
        "bestLabel54",
        "best"
    );

    setText(
        "overallStatisticsTitle",
        "overallStatistics"
    );

    setText(
        "totalCardsLabel",
        "totalCards"
    );

    setText(
        "correctMovesLabel",
        "correctMoves"
    );

    setText(
        "wrongMovesLabel",
        "wrongMoves"
    );

    setText(
        "lostStacksLabel",
        "lostStacks"
    );

    setText(
        "achievementsPreviewTitle",
        "achievements"
    );

    openAchievementsButton.textContent =
        t("achievementsShort");


    backFromProfileButton.textContent =
        t("back");


    setText(
        "achievementsTitle",
        "achievements"
    );

    backFromAchievementsButton.textContent =
        t("back");


    setText(
        "howToPlayTitle",
        "howToPlayTitle"
    );

    setText(
        "rule1Title",
        "rule1Title"
    );

    setText(
        "rule1Text",
        "rule1Text"
    );

    setText(
        "rule2Title",
        "rule2Title"
    );

    setText(
        "rule2Text",
        "rule2Text"
    );

    setText(
        "rule3Title",
        "rule3Title"
    );

    setText(
        "rule3Text",
        "rule3Text"
    );

    setText(
        "rule4Title",
        "rule4Title"
    );

    setText(
        "rule4Text",
        "rule4Text"
    );

    setText(
        "rule5Title",
        "rule5Title"
    );

    setText(
        "rule5Text",
        "rule5Text"
    );

    setText(
        "rule6Title",
        "rule6Title"
    );

    setText(
        "rule6Text",
        "rule6Text"
    );

    backFromHowToPlayButton.textContent =
        t("back");


    setText(
        "settingsTitle",
        "settingsTitle"
    );

    setText(
        "languageTitle",
        "language"
    );

    setText(
        "languageDescription",
        "languageDescription"
    );

    setText(
        "soundTitle",
        "sound"
    );

    setText(
        "soundDescription",
        "soundDescription"
    );

    setText(
        "volumeTitle",
        "volume"
    );

    setText(
        "volumeDescription",
        "volumeDescription"
    );

    setText(
        "animationTitle",
        "animations"
    );

    setText(
        "animationDescription",
        "animationDescription"
    );

    setText(
        "difficultyIndicatorTitle",
        "difficultyIndicator"
    );

    setText(
        "difficultyIndicatorDescription",
        "difficultyIndicatorDescription"
    );

    setText(
        "themeTitle",
        "theme"
    );

    setText(
        "themeDescription",
        "themeDescription"
    );

    setText(
        "cardBackTitle",
        "cardBack"
    );

    setText(
        "cardBackDescription",
        "cardBackDescription"
    );


    updateSettingsOptionNames();


    backFromSettingsButton.textContent =
        t("back");


    setText(
        "gameTitle",
        "gameTitle"
    );

    backFromGameButton.textContent =
        t("menu");

    setText(
        "gameDifficultyLabel",
        "difficulty"
    );

    setText(
        "scoreLabel",
        "score"
    );

    setText(
        "cardsLeftLabel",
        "cardsLeft"
    );

    setText(
        "stacksLeftLabel",
        "stacksLeft"
    );


    lowerButton.textContent =
        t("lower");

    higherButton.textContent =
        t("higher");


    gameResultTitle.textContent =
        t("resultTitle");

    resultScoreLabel.textContent =
        t("resultScore");

    resultCardsLabel.textContent =
        t("resultCards");

    resultLostStacksLabel.textContent =
        t("resultLostStacks");

    resultRemainingCardsLabel.textContent =
        t("resultRemainingCards");

    resultCorrectMovesLabel.textContent =
        t("resultCorrectMoves");

    resultWrongMovesLabel.textContent =
        t("resultWrongMoves");

    nextGameButton.textContent =
        t("nextGame");

    changeDeckButton.textContent =
        t("changeDeck");

    resultLobbyButton.textContent =
        t("lobby");


    exitConfirmTitle.textContent =
        t("exitConfirmTitle");

    exitConfirmText.textContent =
        t("exitConfirmText");

    confirmExitButton.textContent =
        t("exit");

    cancelExitButton.textContent =
        t("cancel");


    if (
        !gameOver &&
        !waitingForAnimation &&
        selectedStack === null
    ) {

        messageElement.textContent =
            t("chooseStack");

    }


    if (
        languageSelect.value !==
        language
    ) {

        languageSelect.value =
            language;

    }


    updateDifficultyDisplay();

    updateContinueGameArea();

}


/* =========================================================
   НАЗВИ OPTION
========================================================= */

function updateSettingsOptionNames() {

    const options = {

        themeSelect: [

            ["classic", "themeClassic"],

            ["midnight", "themeMidnight"],

            ["royal", "themeRoyal"],

            ["crimson", "themeCrimson"]

        ],

        cardBackSelect: [

            ["embroidered", "backEmbroidered"],

            ["diamond", "backDiamond"],

            ["minimal", "backMinimal"],

            ["royal", "backRoyal"]

        ]

    };


    Object.keys(options).forEach(
        selectId => {

            const select =
                document.getElementById(
                    selectId
                );


            if (!select) {

                return;

            }


            options[selectId].forEach(
                optionData => {

                    const option =
                        select.querySelector(
                            `option[value="${optionData[0]}"]`
                        );


                    if (option) {

                        option.textContent =
                            t(optionData[1]);

                    }

                }
            );

        }
    );

}


/* =========================================================
   ПРОФІЛЬ
========================================================= */

const defaultProfile = {

    nickname: "Гравець",

    games36: 0,

    totalScore36: 0,

    best36: 0,

    games54: 0,

    totalScore54: 0,

    best54: 0,

    totalCardsUsed: 0,

    correctMoves: 0,

    wrongMoves: 0,

    lostStacks: 0,

    totalMoves: 0

};


function getProfileData() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.profile
        );


    if (!saved) {

        return {
            ...defaultProfile
        };

    }


    try {

        return {
            ...defaultProfile,
            ...JSON.parse(saved)
        };

    }

    catch (error) {

        return {
            ...defaultProfile
        };

    }

}


function saveProfileData(profile) {

    localStorage.setItem(
        STORAGE_KEYS.profile,
        JSON.stringify(profile)
    );

}


function loadProfile() {

    const profile =
        getProfileData();


    nicknameInput.value =
        profile.nickname;


    games36Element.textContent =
        profile.games36;


    games54Element.textContent =
        profile.games54;


    const average36 =
        profile.games36 > 0
            ? profile.totalScore36 /
              profile.games36
            : 0;


    const average54 =
        profile.games54 > 0
            ? profile.totalScore54 /
              profile.games54
            : 0;


    average36Element.textContent =
        average36.toFixed(1);


    average54Element.textContent =
        average54.toFixed(1);


    best36Element.textContent =
        profile.best36;


    best54Element.textContent =
        profile.best54;


    totalCardsUsedElement.textContent =
        profile.totalCardsUsed;


    correctMovesElement.textContent =
        profile.correctMoves;


    wrongMovesElement.textContent =
        profile.wrongMoves;


    lostStacksElement.textContent =
        profile.lostStacks;


    updateAchievementCounters();

}


/* =========================================================
   ЗАПИС РЕЗУЛЬТАТУ
========================================================= */

function recordGameResult(
    size,
    score
) {

    if (currentGameRecorded) {

        return;

    }


    currentGameRecorded =
        true;


    const profile =
        getProfileData();


    if (size === 36) {

        profile.games36 += 1;

        profile.totalScore36 +=
            score;


        profile.best36 =
            Math.max(
                profile.best36,
                score
            );

    }

    else if (size === 54) {

        profile.games54 += 1;

        profile.totalScore54 +=
            score;


        profile.best54 =
            Math.max(
                profile.best54,
                score
            );

    }


    profile.totalCardsUsed +=
        score;


    profile.correctMoves +=
        currentGameStats.correctMoves;


    profile.wrongMoves +=
        currentGameStats.wrongMoves;


    profile.lostStacks +=
        currentGameStats.lostStacks;


    profile.totalMoves +=
        currentGameStats.correctMoves +
        currentGameStats.wrongMoves;


    saveProfileData(
        profile
    );


    const newlyUnlocked =
        updateAchievements();


    if (
        newlyUnlocked.length > 0
    ) {

        playAchievementSound();


        setTimeout(
            () => {

                newlyUnlocked.forEach(
                    achievement => {

                        showToast(
                            `🏆 ${t("achievementUnlocked")} ${getAchievementName(achievement)}`
                        );

                    }
                );

            },
            400
        );

    }

}


/* =========================================================
   НАЛАШТУВАННЯ
========================================================= */

const defaultSettings = {

    sound: false,

    volume: 0.6,

    animations: true,

    difficultyIndicator: true,

    language: "uk",

    theme: "classic",

    cardBack: "embroidered"

};


function getSettingsData() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.settings
        );


    if (!saved) {

        return {
            ...defaultSettings
        };

    }


    try {

        return {
            ...defaultSettings,
            ...JSON.parse(saved)
        };

    }

    catch (error) {

        return {
            ...defaultSettings
        };

    }

}


function saveSettingsData(settings) {

    localStorage.setItem(
        STORAGE_KEYS.settings,
        JSON.stringify(settings)
    );

}


function applyTheme(theme) {

    document.body.classList.remove(
        "theme-midnight",
        "theme-royal",
        "theme-crimson"
    );


    if (
        theme !== "classic"
    ) {

        document.body.classList.add(
            `theme-${theme}`
        );

    }

}


function loadSettings() {

    const settings =
        getSettingsData();


    soundToggle.checked =
        settings.sound;


    volumeSlider.value =
        Math.round(
            Number(settings.volume) *
            100
        );


    volumeValue.textContent =
        `${volumeSlider.value}%`;


    animationToggle.checked =
        settings.animations;


    difficultyToggle.checked =
        settings.difficultyIndicator;


    languageSelect.value =
        settings.language;


    themeSelect.value =
        settings.theme;


    cardBackSelect.value =
        settings.cardBack;


    applyTheme(
        settings.theme
    );


    applyLanguage();

}


function saveCurrentSettings() {

    const settings = {

        sound:
            soundToggle.checked,

        volume:
            Number(volumeSlider.value) / 100,

        animations:
            animationToggle.checked,

        difficultyIndicator:
            difficultyToggle.checked,

        language:
            languageSelect.value,

        theme:
            themeSelect.value,

        cardBack:
            cardBackSelect.value

    };


    saveSettingsData(
        settings
    );


    applyTheme(
        settings.theme
    );


    applyLanguage();


    if (
        gameScreen &&
        !gameScreen.classList.contains(
            "hidden"
        )
    ) {

        updateInterface();

    }

}


/* =========================================================
   СТВОРЕННЯ КОЛОДИ
========================================================= */

function createDeck(size) {

    const newDeck = [];

    const minimum =
        size === 36
            ? 6
            : 2;


    for (
        let value = minimum;
        value <= 14;
        value++
    ) {

        for (const suit of suits) {

            newDeck.push({

                value: value,

                symbol: suit.symbol,

                color: suit.color

            });

        }

    }


    if (size === 54) {

        newDeck.push({

            value: 15,

            symbol: "🃏",

            color: "red",

            joker: true

        });


        newDeck.push({

            value: 15,

            symbol: "🃏",

            color: "black",

            joker: true

        });

    }


    return newDeck;

}


/* =========================================================
   ПЕРЕМІШУВАННЯ
========================================================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[randomIndex]
        ] =
        [
            array[randomIndex],
            array[i]
        ];

    }


    return array;

}


/* =========================================================
   НАЗВА КАРТИ
========================================================= */

function getCardName(card) {

    if (card.joker) {

        return "JOKER";

    }


    if (card.value <= 10) {

        return String(
            card.value
        );

    }


    return cardNames[
        card.value
    ];

}


/* =========================================================
   МАСТІ НА КАРТІ
========================================================= */

function createSuitSymbols(card) {

    const container =
        document.createElement(
            "div"
        );


    container.className =
        "card-symbols";


    /*
       ТУЗ
    */

    if (
        card.value === 14
    ) {

        const ace =
            document.createElement(
                "div"
            );


        ace.className =
            "big-suit";


        ace.textContent =
            card.symbol;


        container.appendChild(
            ace
        );


        return container;

    }


    /*
       ВАЛЕТ / ДАМА / КОРОЛЬ

       Використовуємо окрему декоративну
       фігуру замість простого тексту J/Q/K.
    */

    if (
        card.value === 11 ||
        card.value === 12 ||
        card.value === 13
    ) {

        const faceCard =
            document.createElement(
                "div"
            );


        faceCard.className =
            `face-card face-${getCardName(card).toLowerCase()}`;


        const crown =
            document.createElement(
                "div"
            );


        crown.className =
            "face-crown";


        crown.textContent =
            card.value === 13
                ? "♛"
                : card.value === 12
                    ? "♕"
                    : "♞";


        const head =
            document.createElement(
                "div"
            );


        head.className =
            "face-head";


        const face =
            document.createElement(
                "div"
            );


        face.className =
            "face-head-inner";


        face.textContent =
            card.value === 11
                ? "J"
                : card.value === 12
                    ? "Q"
                    : "K";


        const body =
            document.createElement(
                "div"
            );


        body.className =
            "face-body";


        body.textContent =
            card.symbol;


        const letter =
            document.createElement(
                "div"
            );


        letter.className =
            "face-letter";


        letter.textContent =
            getCardName(card);


        const suit =
            document.createElement(
                "div"
            );


        suit.className =
            "face-suit";


        suit.textContent =
            card.symbol;


        head.appendChild(
            face
        );


        faceCard.appendChild(
            crown
        );


        faceCard.appendChild(
            head
        );


        faceCard.appendChild(
            body
        );


        faceCard.appendChild(
            letter
        );


        faceCard.appendChild(
            suit
        );


        container.appendChild(
            faceCard
        );


        return container;

    }


    /*
       2–10

       Більш збалансована сітка.
       Верхні та нижні піки мають
       правильну орієнтацію.
    */

    const layouts = {

        2: [
            [1, 2, false],
            [6, 2, true]
        ],

        3: [
            [1, 2, false],
            [3, 2, false],
            [6, 2, true]
        ],

        4: [
            [1, 1, false],
            [1, 3, false],
            [6, 1, true],
            [6, 3, true]
        ],

        5: [
            [1, 1, false],
            [1, 3, false],
            [3, 2, false],
            [6, 1, true],
            [6, 3, true]
        ],

        6: [
            [1, 1, false],
            [1, 3, false],
            [3, 1, false],
            [3, 3, false],
            [6, 1, true],
            [6, 3, true]
        ],

        7: [
            [1, 1, false],
            [1, 3, false],
            [2, 2, false],
            [3, 1, false],
            [3, 3, false],
            [6, 1, true],
            [6, 3, true]
        ],

        8: [
            [1, 1, false],
            [1, 3, false],
            [2, 2, false],
            [3, 1, false],
            [3, 3, false],
            [5, 1, true],
            [5, 3, true],
            [6, 2, true]
        ],

        9: [
            [1, 1, false],
            [1, 3, false],
            [2, 1, false],
            [2, 3, false],
            [3, 2, false],
            [4, 1, true],
            [4, 3, true],
            [5, 1, true],
            [5, 3, true]
        ],

        10: [
            [1, 1, false],
            [1, 3, false],
            [2, 2, false],
            [3, 1, false],
            [3, 3, false],
            [4, 1, true],
            [4, 3, true],
            [5, 2, true],
            [6, 1, true],
            [6, 3, true]
        ]

    };


    const layout =
        layouts[card.value];


    if (!layout) {

        return container;

    }


    layout.forEach(
        position => {

            const pip =
                document.createElement(
                    "span"
                );


            pip.className =
                "pip";


            pip.textContent =
                card.symbol;


            pip.style.gridRow =
                position[0];


            pip.style.gridColumn =
                position[1];


            if (
                position[2]
            ) {

                pip.classList.add(
                    "rotated"
                );

            }


            container.appendChild(
                pip
            );

        }
    );


    return container;

}


/* =========================================================
   ЗВОРОТНА СТОРОНА КАРТИ
========================================================= */

function createCardBackElement() {

    const back =
        document.createElement(
            "div"
        );


    const settings =
        getSettingsData();


    const backStyle =
        settings.cardBack ||
        "embroidered";


    back.className =
        `card-face card-back back-${backStyle}`;


    if (
        backStyle ===
        "diamond"
    ) {

        back.innerHTML = `

            <div class="diamond-pattern">
                <span>◆</span>
            </div>

        `;

    }

    else if (
        backStyle ===
        "minimal"
    ) {

        back.innerHTML = `

            <div class="minimal-pattern">
                ✦
            </div>

        `;

    }

    else if (
        backStyle ===
        "royal"
    ) {

        back.innerHTML = `

            <div class="royal-pattern">
                ♛
            </div>

        `;

    }

    else {

        back.innerHTML = `

            <div class="embroidered-pattern">

                <div class="pattern-line">
                    ◆ ◆ ◆ ◆ ◆
                </div>

                <div class="pattern-center">
                    ✦
                </div>

                <div class="pattern-line">
                    ◆ ◆ ◆ ◆ ◆
                </div>

            </div>

        `;

    }


    return back;

}


/* =========================================================
   СТВОРЕННЯ КАРТИ
========================================================= */

function createCardElement(
    card,
    faceUp = true,
    animate = false
) {

    const cardElement =
        document.createElement(
            "div"
        );


    cardElement.className =
        `card ${card.color} flip-card`;


    const inner =
        document.createElement(
            "div"
        );


    inner.className =
        "card-inner";


    const back =
        createCardBackElement();


    const front =
        document.createElement(
            "div"
        );


    front.className =
        `card-face card-front ${card.color}`;


    if (card.joker) {

        front.innerHTML = `

            <div class="joker-card">

                🃏

                <span>
                    JOKER
                </span>

            </div>

        `;

    }

    else {

        const topCorner =
            document.createElement(
                "div"
            );


        topCorner.className =
            "card-corner top-corner";


        topCorner.innerHTML = `

            <span>
                ${getCardName(card)}
            </span>

            <span class="corner-suit">
                ${card.symbol}
            </span>

        `;


        const center =
            createSuitSymbols(card);


        const bottomCorner =
            document.createElement(
                "div"
            );


        bottomCorner.className =
            "card-corner bottom-corner";


        bottomCorner.innerHTML = `

            <span>
                ${getCardName(card)}
            </span>

            <span class="corner-suit">
                ${card.symbol}
            </span>

        `;


        front.appendChild(
            topCorner
        );


        front.appendChild(
            center
        );


        front.appendChild(
            bottomCorner
        );

    }


    inner.appendChild(
        back
    );


    inner.appendChild(
        front
    );


    cardElement.appendChild(
        inner
    );


    if (faceUp) {

        cardElement.classList.add(
            "flipped"
        );

    }


    if (
        animate &&
        getSettingsData().animations
    ) {

        cardElement.classList.remove(
            "flipped"
        );


        requestAnimationFrame(
            () => {

                requestAnimationFrame(
                    () => {

                        cardElement.classList.add(
                            "flipped"
                        );

                    }
                );

            }
        );

    }


    return cardElement;

}


/* =========================================================
   ВІДОБРАЖЕННЯ КОЛОДИ
========================================================= */

function updateDeckVisual() {

    deckVisual.innerHTML = "";


    if (deck.length === 0) {

        deckCount.textContent =
            "0";


        deckVisual.classList.add(
            "empty"
        );


        return;

    }


    deckVisual.classList.remove(
        "empty"
    );


    const cardsToShow =
        Math.min(
            deck.length,
            5
        );


    for (
        let i = 0;
        i < cardsToShow;
        i++
    ) {

        const backCard =
            createCardElement(
                deck[
                    deck.length - 1
                ],
                false,
                false
            );


        backCard.classList.add(
            "deck-card"
        );


        backCard.style.transform =
            `translate(
                ${i * 2}px,
                ${i * -2}px
            )`;


        deckVisual.appendChild(
            backCard
        );

    }


    deckCount.textContent =
        deck.length;

}


/* =========================================================
   ЗАКРИТТЯ ВІКНА РЕЗУЛЬТАТУ
========================================================= */

function hideGameResult() {

    gameResultOverlay.classList.add(
        "hidden"
    );

}


/* =========================================================
   ПОКАЗ РЕЗУЛЬТАТУ
========================================================= */

function showGameResult(reason) {

    const finalScore =
        currentDeckSize -
        deck.length;


    const activeStacks =
        stacks.filter(
            stack => stack.active
        ).length;


    const lostStacks =
        stacks.length -
        activeStacks;


    gameResultTitle.textContent =
        t("resultTitle");


    gameResultReason.textContent =
        reason;


    resultScore.textContent =
        `${finalScore} / ${currentDeckSize}`;


    resultCards.textContent =
        finalScore;


    resultLostStacks.textContent =
        lostStacks;


    resultRemainingCards.textContent =
        deck.length;


    resultCorrectMoves.textContent =
        currentGameStats.correctMoves;


    resultWrongMoves.textContent =
        currentGameStats.wrongMoves;


    gameResultOverlay.classList.remove(
        "hidden"
    );

}


/* =========================================================
   СКЛАДНІСТЬ
========================================================= */

function calculateDifficulty(
    size
) {

    /*
       Інформаційний індикатор.

       36 карт:
       менше значень -> менше варіантів,
       тому умовно нижча складність.

       54 карт:
       ширший діапазон + Joker.
    */

    if (size === 36) {

        return {
            key: "normal",
            label: t("normal")
        };

    }


    return {
        key: "hard",
        label: t("hard")
    };

}


function updateDifficultyDisplay() {

    const settings =
        getSettingsData();


    const difficulty36 =
        calculateDifficulty(36);


    const difficulty54 =
        calculateDifficulty(54);


    deck36Difficulty.textContent =
        `${t("difficulty")}: ${difficulty36.label}`;


    deck54Difficulty.textContent =
        `${t("difficulty")}: ${difficulty54.label}`;


    const currentDifficulty =
        calculateDifficulty(
            currentDeckSize
        );


    gameDifficultyValue.textContent =
        currentDifficulty.label;


    gameDifficultyIndicator.classList.toggle(
        "hidden",
        !settings.difficultyIndicator
    );

}


/* =========================================================
   НОВА ГРА
========================================================= */

function startGame(
    size = null
) {

    hideGameResult();

    closeExitConfirmation();


    if (size !== null) {

        currentDeckSize =
            Number(size);

    }


    currentGameRecorded =
        false;


    currentGameStats = {

        correctMoves: 0,

        wrongMoves: 0,

        lostStacks: 0

    };


    isRestoringGame =
        false;


    deck =
        shuffle(
            createDeck(
                currentDeckSize
            )
        );


    stacks = [];


    selectedStack =
        null;


    gameOver =
        false;


    waitingForAnimation =
        true;


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        stacks.push({

            cards: [
                deck.pop()
            ],

            active: true,

            animate: true,

            closing: false

        });

    }


    messageElement.textContent =
        t("preparing");


    updateInterface();


    lowerButton.disabled =
        true;


    higherButton.disabled =
        true;


    saveCurrentGame();


    setTimeout(
        () => {

            if (gameOver) {

                return;

            }


            waitingForAnimation =
                false;


            messageElement.textContent =
                t("chooseStack");


            updateInterface();

            saveCurrentGame();

        },
        getSettingsData().animations
            ? 900
            : 0
    );

}


/* =========================================================
   ОНОВЛЕННЯ ІНТЕРФЕЙСУ
========================================================= */

function updateInterface() {

    const size =
        currentDeckSize;


    const cardsUsed =
        size -
        deck.length;


    scoreElement.textContent =
        cardsUsed;


    cardsLeftElement.textContent =
        deck.length;


    const activeStacks =
        stacks.filter(
            stack => stack.active
        ).length;


    stacksLeftElement.textContent =
        activeStacks;


    stacksElement.innerHTML =
        "";


    stacks.forEach(
        (stack, index) => {

            const stackElement =
                document.createElement(
                    "div"
                );


            stackElement.className =
                "stack";


            if (
                index === selectedStack
            ) {

                stackElement.classList.add(
                    "selected"
                );

            }


            if (
                !stack.active &&
                !stack.closing
            ) {

                stackElement.classList.add(
                    "lost"
                );

            }


            if (
                stack.cards.length > 0
            ) {

                const currentCard =
                    stack.cards[
                        stack.cards.length - 1
                    ];


                let faceUp =
                    true;


                if (
                    !stack.active &&
                    !stack.closing
                ) {

                    faceUp =
                        false;

                }


                const cardElement =
                    createCardElement(
                        currentCard,
                        faceUp,
                        stack.animate === true
                    );


                if (stack.closing) {

                    cardElement.classList.add(
                        "closing"
                    );

                }


                stack.animate =
                    false;


                stackElement.appendChild(
                    cardElement
                );

            }


            if (
                stack.active &&
                !gameOver &&
                !waitingForAnimation
            ) {

                stackElement.addEventListener(
                    "click",
                    () => {

                        selectStack(
                            index
                        );

                    }
                );

            }


            stacksElement.appendChild(
                stackElement
            );

        }
    );


    updateDeckVisual();

    updateButtons();

    updateDifficultyDisplay();

}


/* =========================================================
   ВИБІР СТОПКИ
========================================================= */

function selectStack(index) {

    if (gameOver) {

        return;

    }


    if (waitingForAnimation) {

        return;

    }


    if (
        !stacks[index] ||
        !stacks[index].active
    ) {

        return;

    }


    selectedStack =
        index;


    playStackSelectSound();


    const currentCard =
        stacks[index].cards[
            stacks[index].cards.length - 1
        ];


    if (currentCard.joker) {

        messageElement.textContent =
            `${t("selectedStack")} ${index + 1}: JOKER. ${t("onlyLower")}`;

    }

    else {

        const cardName =
            getCardName(
                currentCard
            );


        const minimum =
            currentDeckSize === 36
                ? 6
                : 2;


        if (
            currentCard.value ===
            minimum
        ) {

            messageElement.textContent =
                `${t("selectedStack")} ${index + 1}: ${cardName} ${currentCard.symbol}. ${t("onlyHigher")}`;

        }

        else if (
            currentDeckSize === 36 &&
            currentCard.value === 14
        ) {

            messageElement.textContent =
                `${t("selectedStack")} ${index + 1}: ${cardName} ${currentCard.symbol}. ${t("onlyLower")}`;

        }

        else {

            messageElement.textContent =
                `${t("selectedStack")} ${index + 1}: ${cardName} ${currentCard.symbol}. ${t("choosePrediction")}`;

        }

    }


    updateInterface();

}


/* =========================================================
   КНОПКИ МЕНШЕ / БІЛЬШЕ
========================================================= */

function updateButtons() {

    lowerButton.disabled =
        true;


    higherButton.disabled =
        true;


    if (
        selectedStack === null
    ) {

        return;

    }


    if (gameOver) {

        return;

    }


    if (waitingForAnimation) {

        return;

    }


    const stack =
        stacks[selectedStack];


    if (
        !stack ||
        !stack.active
    ) {

        return;

    }


    const currentCard =
        stack.cards[
            stack.cards.length - 1
        ];


    const minimum =
        currentDeckSize === 36
            ? 6
            : 2;


    if (
        currentCard.value ===
        minimum
    ) {

        higherButton.disabled =
            false;


        return;

    }


    if (
        currentCard.value === 15
    ) {

        lowerButton.disabled =
            false;


        return;

    }


    if (
        currentDeckSize === 36 &&
        currentCard.value === 14
    ) {

        lowerButton.disabled =
            false;


        return;

    }


    lowerButton.disabled =
        false;


    higherButton.disabled =
        false;

}


/* =========================================================
   АНІМАЦІЯ КАРТИ З КОЛОДИ
========================================================= */

function animateCardFromDeck(
    card,
    stackIndex,
    callback
) {

    const stackElement =
        stacksElement.children[
            stackIndex
        ];


    if (!stackElement) {

        callback();

        return;

    }


    const settings =
        getSettingsData();


    if (!settings.animations) {

        callback();

        return;

    }


    const cardElement =
        createCardElement(
            card,
            false,
            false
        );


    cardElement.classList.add(
        "moving-card"
    );


    document.body.appendChild(
        cardElement
    );


    playCardMoveSound();


    const deckRect =
        deckVisual.getBoundingClientRect();


    const stackRect =
        stackElement.getBoundingClientRect();


    const cardWidth =
        cardElement.getBoundingClientRect().width;


    const cardHeight =
        cardElement.getBoundingClientRect().height;


    const startX =
        deckRect.left +
        deckRect.width / 2 -
        cardWidth / 2;


    const startY =
        deckRect.top +
        deckRect.height / 2 -
        cardHeight / 2;


    const endX =
        stackRect.left +
        stackRect.width / 2 -
        cardWidth / 2;


    const endY =
        stackRect.top +
        32;


    cardElement.style.left =
        `${startX}px`;


    cardElement.style.top =
        `${startY}px`;


    requestAnimationFrame(
        () => {

            cardElement.style.left =
                `${endX}px`;


            cardElement.style.top =
                `${endY}px`;

        }
    );


    setTimeout(
        () => {

            cardElement.remove();

            callback();

        },
        700
    );

}


/* =========================================================
   ХІД ГРИ
========================================================= */

function playPrediction(
    prediction
) {

    if (
        selectedStack === null
    ) {

        return;

    }


    if (gameOver) {

        return;

    }


    if (waitingForAnimation) {

        return;

    }


    const stackIndex =
        selectedStack;


    const stack =
        stacks[stackIndex];


    if (
        !stack ||
        !stack.active
    ) {

        return;

    }


    if (deck.length === 0) {

        finishGame(
            t("deckFinished")
        );

        return;

    }


    waitingForAnimation =
        true;


    const currentCard =
        stack.cards[
            stack.cards.length - 1
        ];


    const nextCard =
        deck.pop();


    let correct =
        false;


    if (
        prediction === "higher"
    ) {

        correct =
            nextCard.value >
            currentCard.value;

    }


    if (
        prediction === "lower"
    ) {

        correct =
            nextCard.value <
            currentCard.value;

    }


    if (
        nextCard.value ===
        currentCard.value
    ) {

        correct =
            false;

    }


    const nextCardName =
        getCardName(
            nextCard
        );


    messageElement.textContent =
        `${correct ? "✅ " + t("correct") : "❌ " + t("wrong")} ${t("cardAppeared")} ${nextCardName}${nextCard.joker ? "" : " " + nextCard.symbol}.`;


    updateInterface();


    animateCardFromDeck(
        nextCard,
        stackIndex,
        () => {

            stack.cards.push(
                nextCard
            );


            if (correct) {

                currentGameStats.correctMoves +=
                    1;


                playCorrectSound();


                stack.animate =
                    true;


                updateInterface();


                saveCurrentGame();


                setTimeout(
                    () => {

                        waitingForAnimation =
                            false;


                        checkGameEnd();


                        if (!gameOver) {

                            updateInterface();

                            saveCurrentGame();

                        }

                    },
                    getSettingsData().animations
                        ? 750
                        : 0
                );


                return;

            }


            currentGameStats.wrongMoves +=
                1;


            playWrongSound();


            stack.animate =
                true;


            updateInterface();


            setTimeout(
                () => {

                    const stackElement =
                        stacksElement.children[
                            stackIndex
                        ];


                    if (!stackElement) {

                        return;

                    }


                    const cardElement =
                        stackElement.querySelector(
                            ".flip-card"
                        );


                    if (cardElement) {

                        requestAnimationFrame(
                            () => {

                                cardElement.classList.add(
                                    "closing"
                                );

                            }
                        );

                    }


                    messageElement.textContent =
                        `${t("wrong")} ${t("stackLost")}`;


                    setTimeout(
                        () => {

                            stack.active =
                                false;


                            stack.closing =
                                false;


                            currentGameStats.lostStacks +=
                                1;


                            playStackLostSound();


                            waitingForAnimation =
                                false;


                            selectedStack =
                                null;


                            updateInterface();


                            checkGameEnd();


                            if (!gameOver) {

                                saveCurrentGame();

                            }

                        },
                        getSettingsData().animations
                            ? 750
                            : 0
                    );

                },
                getSettingsData().animations
                    ? 1500
                    : 0
            );

        }
    );

}


/* =========================================================
   КІНЕЦЬ ГРИ
========================================================= */

function checkGameEnd() {

    const activeStacks =
        stacks.filter(
            stack => stack.active
        ).length;


    if (
        activeStacks === 0
    ) {

        finishGame(
            t("allStacksLost")
        );


        return;

    }


    if (
        deck.length === 0
    ) {

        finishGame(
            t("deckFinished")
        );

    }

}


/* =========================================================
   ЗАВЕРШЕННЯ
========================================================= */

function finishGame(
    reason = null
) {

    if (gameOver) {

        return;

    }


    gameOver =
        true;


    waitingForAnimation =
        false;


    selectedStack =
        null;


    const finalScore =
        currentDeckSize -
        deck.length;


    scoreElement.textContent =
        finalScore;


    const finalReason =
        reason ||
        t("gameFinished");


    messageElement.textContent =
        `🏁 ${finalReason} ${t("result")} ${finalScore} ${t("cards")}`;


    lowerButton.disabled =
        true;


    higherButton.disabled =
        true;


    playFinishSound();


    recordGameResult(
        currentDeckSize,
        finalScore
    );


    clearSavedGame();


    showGameResult(
        finalReason
    );


    updateContinueGameArea();

}


/* =========================================================
   ЗБЕРЕЖЕННЯ НЕЗАВЕРШЕНОЇ ГРИ
========================================================= */

function serializeGame() {

    return {

        version: 2,

        currentDeckSize:
            currentDeckSize,

        deck:
            deck,

        stacks:
            stacks,

        selectedStack:
            selectedStack,

        currentGameStats:
            currentGameStats,

        savedAt:
            Date.now()

    };

}


function saveCurrentGame() {

    if (gameOver) {

        return;

    }


    if (
        !deck.length &&
        !stacks.length
    ) {

        return;

    }


    try {

        localStorage.setItem(
            STORAGE_KEYS.savedGame,
            JSON.stringify(
                serializeGame()
            )
        );


        updateContinueGameArea();

    }

    catch (error) {

        console.warn(
            "Не вдалося зберегти гру:",
            error
        );

    }

}


function getSavedGame() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.savedGame
        );


    if (!saved) {

        return null;

    }


    try {

        const parsed =
            JSON.parse(saved);


        if (
            !parsed ||
            !Array.isArray(parsed.deck) ||
            !Array.isArray(parsed.stacks)
        ) {

            return null;

        }


        if (
            parsed.currentDeckSize !== 36 &&
            parsed.currentDeckSize !== 54
        ) {

            return null;

        }


        return parsed;

    }

    catch (error) {

        return null;

    }

}


function clearSavedGame() {

    localStorage.removeItem(
        STORAGE_KEYS.savedGame
    );


    updateContinueGameArea();

}


function updateContinueGameArea() {

    const saved =
        getSavedGame();


    if (!saved) {

        continueGameArea.classList.add(
            "hidden"
        );


        return;

    }


    continueGameArea.classList.remove(
        "hidden"
    );


    const usedCards =
        saved.currentDeckSize -
        saved.deck.length;


    const language =
        getCurrentLanguage();


    continueGameDescription.textContent =
        language === "en"
            ? `${saved.currentDeckSize}-card deck • ${usedCards} cards used`
            : `Колода ${saved.currentDeckSize} карт • використано ${usedCards} карт`;

}


/* =========================================================
   ВІДНОВЛЕННЯ ГРИ
========================================================= */

function restoreSavedGame() {

    const saved =
        getSavedGame();


    if (!saved) {

        showToast(
            t("noSavedGame")
        );


        return;

    }


    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    gameScreen.classList.remove(
        "hidden"
    );


    currentDeckSize =
        Number(
            saved.currentDeckSize
        );


    deck =
        Array.isArray(saved.deck)
            ? saved.deck
            : [];


    stacks =
        Array.isArray(saved.stacks)
            ? saved.stacks
            : [];


    selectedStack =
        saved.selectedStack === null
            ? null
            : Number(
                saved.selectedStack
            );


    currentGameStats = {

        correctMoves:
            Number(
                saved.currentGameStats?.correctMoves ||
                0
            ),

        wrongMoves:
            Number(
                saved.currentGameStats?.wrongMoves ||
                0
            ),

        lostStacks:
            Number(
                saved.currentGameStats?.lostStacks ||
                0
            )

    };


    stacks.forEach(
        stack => {

            stack.animate =
                false;

            stack.closing =
                false;

        }
    );


    gameOver =
        false;


    waitingForAnimation =
        false;


    currentGameRecorded =
        false;


    isRestoringGame =
        true;


    applyLanguage();

    updateInterface();


    if (
        selectedStack !== null &&
        stacks[selectedStack] &&
        stacks[selectedStack].active
    ) {

        const currentCard =
            stacks[selectedStack].cards[
                stacks[selectedStack].cards.length - 1
            ];


        if (currentCard) {

            selectStack(
                selectedStack
            );

        }

    }

}


/* =========================================================
   ЕКРАНИ
========================================================= */

function hideAllScreens() {

    mainMenu.classList.add(
        "hidden"
    );


    deckMenu.classList.add(
        "hidden"
    );


    profileScreen.classList.add(
        "hidden"
    );


    settingsScreen.classList.add(
        "hidden"
    );


    achievementsScreen.classList.add(
        "hidden"
    );


    howToPlayScreen.classList.add(
        "hidden"
    );


    gameScreen.classList.add(
        "hidden"
    );

}


function showMainMenu() {

    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    mainMenu.classList.remove(
        "hidden"
    );


    applyLanguage();

    updateContinueGameArea();

}


function showDeckMenu() {

    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    deckMenu.classList.remove(
        "hidden"
    );


    applyLanguage();

}


function showProfile() {

    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    loadProfile();


    profileScreen.classList.remove(
        "hidden"
    );


    applyLanguage();

}


function showAchievements() {

    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    achievementsScreen.classList.remove(
        "hidden"
    );


    renderAchievements();

}


function showHowToPlay() {

    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    howToPlayScreen.classList.remove(
        "hidden"
    );


    applyLanguage();

}


function showSettings() {

    hideGameResult();

    closeExitConfirmation();

    hideAllScreens();


    loadSettings();


    settingsScreen.classList.remove(
        "hidden"
    );


    applyLanguage();

}


function showGame(size) {

    hideAllScreens();


    gameScreen.classList.remove(
        "hidden"
    );


    applyLanguage();


    startGame(
        size
    );

}


/* =========================================================
   ПОВЕРНЕННЯ З ГРИ
========================================================= */

function requestExitGame() {

    if (
        gameOver
    ) {

        showMainMenu();

        return;

    }


    if (
        !deck.length ||
        !stacks.length
    ) {

        showMainMenu();

        return;

    }


    saveCurrentGame();

    openExitConfirmation();

}


function openExitConfirmation() {

    applyLanguage();


    exitConfirmOverlay.classList.remove(
        "hidden"
    );

}


function closeExitConfirmation() {

    exitConfirmOverlay.classList.add(
        "hidden"
    );

}


function confirmExitGame() {

    saveCurrentGame();


    gameOver =
        true;


    waitingForAnimation =
        false;


    selectedStack =
        null;


    closeExitConfirmation();

    showMainMenu();

}


/* =========================================================
   ЗБЕРЕЖЕННЯ НІКНЕЙМУ
========================================================= */

function saveNickname() {

    let nickname =
        nicknameInput.value.trim();


    if (
        nickname.length === 0
    ) {

        nickname =
            "Гравець";

    }


    const profile =
        getProfileData();


    profile.nickname =
        nickname;


    saveProfileData(
        profile
    );


    nicknameInput.value =
        nickname;


    showToast(
        t("save")
    );

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    /*
       Стару поведінку виходу зберігаємо:
       це не видаляє профіль,
       налаштування чи статистику.
    */

    gameOver =
        true;


    waitingForAnimation =
        false;


    selectedStack =
        null;


    showMainMenu();

}


/* =========================================================
   ДОСЯГНЕННЯ
========================================================= */

const achievementDefinitions = [

    {
        id:
            "first_game",

        icon:
            "🎮",

        nameUk:
            "Перша партія",

        nameEn:
            "First Game",

        descriptionUk:
            "Заверши свою першу гру.",

        descriptionEn:
            "Finish your first game.",

        target:
            1,

        getProgress:
            profile =>
                profile.games36 +
                profile.games54
    },


    {
        id:
            "score_10",

        icon:
            "⭐",

        nameUk:
            "Перші 10",

        nameEn:
            "First 10",

        descriptionUk:
            "Набери щонайменше 10 очок за одну гру.",

        descriptionEn:
            "Score at least 10 points in one game.",

        target:
            10,

        getProgress:
            profile =>
                Math.max(
                    profile.best36,
                    profile.best54
                )
    },


    {
        id:
            "score_20",

        icon:
            "🌟",

        nameUk:
            "20 очок",

        nameEn:
            "20 Points",

        descriptionUk:
            "Набери щонайменше 20 очок за одну гру.",

        descriptionEn:
            "Score at least 20 points in one game.",

        target:
            20,

        getProgress:
            profile =>
                Math.max(
                    profile.best36,
                    profile.best54
                )
    },


    {
        id:
            "score_30",

        icon:
            "🏆",

        nameUk:
            "30 очок",

        nameEn:
            "30 Points",

        descriptionUk:
            "Набери щонайменше 30 очок за одну гру.",

        descriptionEn:
            "Score at least 30 points in one game.",

        target:
            30,

        getProgress:
            profile =>
                Math.max(
                    profile.best36,
                    profile.best54
                )
    },


    {
        id:
            "games_10",

        icon:
            "🔟",

        nameUk:
            "Десять партій",

        nameEn:
            "Ten Games",

        descriptionUk:
            "Заверши 10 ігор.",

        descriptionEn:
            "Finish 10 games.",

        target:
            10,

        getProgress:
            profile =>
                profile.games36 +
                profile.games54
    },


    {
        id:
            "cards_100",

        icon:
            "🃏",

        nameUk:
            "100 карт",

        nameEn:
            "100 Cards",

        descriptionUk:
            "Використай 100 карт.",

        descriptionEn:
            "Use 100 cards.",

        target:
            100,

        getProgress:
            profile =>
                profile.totalCardsUsed
    },


    {
        id:
            "correct_25",

        icon:
            "🎯",

        nameUk:
            "Точний прогноз",

        nameEn:
            "Accurate Predictor",

        descriptionUk:
            "Зроби 25 правильних ходів.",

        descriptionEn:
            "Make 25 correct moves.",

        target:
            25,

        getProgress:
            profile =>
                profile.correctMoves
    },


    {
        id:
            "correct_100",

        icon:
            "💯",

        nameUk:
            "Майстер прогнозів",

        nameEn:
            "Prediction Master",

        descriptionUk:
            "Зроби 100 правильних ходів.",

        descriptionEn:
            "Make 100 correct moves.",

        target:
            100,

        getProgress:
            profile =>
                profile.correctMoves
    },


    {
        id:
            "fifty_four",

        icon:
            "🃏",

        nameUk:
            "54",

        nameEn:
            "54",

        descriptionUk:
            "Заверши гру з колодою 54 карти.",

        descriptionEn:
            "Finish a game with the 54-card deck.",

        target:
            1,

        getProgress:
            profile =>
                profile.games54
    },


    {
        id:
            "perfect_36",

        icon:
            "♠",

        nameUk:
            "Повна 36",

        nameEn:
            "Full 36",

        descriptionUk:
            "Досягни 30 очок у грі на 36 карт.",

        descriptionEn:
            "Reach 30 points in a 36-card game.",

        target:
            30,

        getProgress:
            profile =>
                profile.best36
    }

];


function getAchievementName(
    achievement
) {

    return getCurrentLanguage() === "en"
        ? achievement.nameEn
        : achievement.nameUk;

}


function getAchievementDescription(
    achievement
) {

    return getCurrentLanguage() === "en"
        ? achievement.descriptionEn
        : achievement.descriptionUk;

}


function getUnlockedAchievements() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.achievements
        );


    if (!saved) {

        return [];

    }


    try {

        const data =
            JSON.parse(saved);


        return Array.isArray(data)
            ? data
            : [];

    }

    catch (error) {

        return [];

    }

}


function saveUnlockedAchievements(
    ids
) {

    localStorage.setItem(
        STORAGE_KEYS.achievements,
        JSON.stringify(ids)
    );

}


function updateAchievements() {

    const profile =
        getProfileData();


    const unlocked =
        getUnlockedAchievements();


    const newlyUnlocked = [];


    achievementDefinitions.forEach(
        achievement => {

            const progress =
                achievement.getProgress(
                    profile
                );


            if (
                progress >=
                achievement.target &&
                !unlocked.includes(
                    achievement.id
                )
            ) {

                unlocked.push(
                    achievement.id
                );


                newlyUnlocked.push(
                    achievement
                );

            }

        }
    );


    saveUnlockedAchievements(
        unlocked
    );


    updateAchievementCounters();


    return newlyUnlocked;

}


function updateAchievementCounters() {

    const unlocked =
        getUnlockedAchievements();


    const total =
        achievementDefinitions.length;


    const count =
        unlocked.length;


    achievementsCount.textContent =
        `${count} / ${total}`;


    achievementsProgress.textContent =
        `${count} / ${total}`;

}


function renderAchievements() {

    const profile =
        getProfileData();


    const unlocked =
        getUnlockedAchievements();


    achievementsList.innerHTML =
        "";


    achievementDefinitions.forEach(
        achievement => {

            const progressRaw =
                achievement.getProgress(
                    profile
                );


            const progress =
                Math.min(
                    progressRaw,
                    achievement.target
                );


            const isUnlocked =
                unlocked.includes(
                    achievement.id
                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                `achievement-item ${
                    isUnlocked
                        ? "unlocked"
                        : "locked"
                }`;


            const icon =
                document.createElement(
                    "div"
                );


            icon.className =
                "achievement-icon";


            icon.textContent =
                isUnlocked
                    ? achievement.icon
                    : "🔒";


            const content =
                document.createElement(
                    "div"
                );


            const name =
                document.createElement(
                    "div"
                );


            name.className =
                "achievement-name";


            name.textContent =
                getAchievementName(
                    achievement
                );


            const description =
                document.createElement(
                    "div"
                );


            description.className =
                "achievement-description";


            description.textContent =
                getAchievementDescription(
                    achievement
                );


            content.appendChild(
                name
            );


            content.appendChild(
                description
            );


            const progressElement =
                document.createElement(
                    "div"
                );


            progressElement.className =
                "achievement-progress";


            progressElement.textContent =
                isUnlocked
                    ? "✓"
                    : `${progress} / ${achievement.target}`;


            item.appendChild(
                icon
            );


            item.appendChild(
                content
            );


            item.appendChild(
                progressElement
            );


            achievementsList.appendChild(
                item
            );

        }
    );


    updateAchievementCounters();

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    toastElement.textContent =
        message;


    toastElement.classList.remove(
        "hidden"
    );


    if (toastTimer) {

        clearTimeout(
            toastTimer
        );

    }


    toastTimer =
        setTimeout(
            () => {

                toastElement.classList.add(
                    "hidden"
                );

            },
            2600
        );

}


/* =========================================================
   ГОЛОВНЕ МЕНЮ
========================================================= */

playButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showDeckMenu();

    }
);


howToPlayButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showHowToPlay();

    }
);


profileButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showProfile();

    }
);


settingsButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showSettings();

    }
);


logoutButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        logout();

    }
);


continueGameButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        restoreSavedGame();

    }
);


/* =========================================================
   ВИБІР КОЛОДИ
========================================================= */

deck36Button.addEventListener(
    "click",
    () => {

        playButtonSound();

        showGame(36);

    }
);


deck54Button.addEventListener(
    "click",
    () => {

        playButtonSound();

        showGame(54);

    }
);


backToMenuButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showMainMenu();

    }
);


/* =========================================================
   ПРОФІЛЬ
========================================================= */

backFromProfileButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showMainMenu();

    }
);


saveNicknameButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        saveNickname();

    }
);


openAchievementsButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showAchievements();

    }
);


/* =========================================================
   ДОСЯГНЕННЯ
========================================================= */

backFromAchievementsButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showProfile();

    }
);


/* =========================================================
   ЯК ГРАТИ
========================================================= */

backFromHowToPlayButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        showMainMenu();

    }
);


/* =========================================================
   НАЛАШТУВАННЯ
========================================================= */

backFromSettingsButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        saveCurrentSettings();

        showMainMenu();

    }
);


soundToggle.addEventListener(
    "change",
    () => {

        saveCurrentSettings();


        if (
            soundToggle.checked
        ) {

            playTone(
                660,
                0.12,
                "sine",
                0.05
            );

        }

    }
);


volumeSlider.addEventListener(
    "input",
    () => {

        volumeValue.textContent =
            `${volumeSlider.value}%`;


        saveCurrentSettings();

    }
);


animationToggle.addEventListener(
    "change",
    () => {

        saveCurrentSettings();

    }
);


difficultyToggle.addEventListener(
    "change",
    () => {

        saveCurrentSettings();

    }
);


themeSelect.addEventListener(
    "change",
    () => {

        saveCurrentSettings();

    }
);


cardBackSelect.addEventListener(
    "change",
    () => {

        saveCurrentSettings();

    }
);


languageSelect.addEventListener(
    "change",
    () => {

        saveCurrentSettings();

    }
);


/* =========================================================
   ПОВЕРНЕННЯ З ГРИ В МЕНЮ
========================================================= */

backFromGameButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        requestExitGame();

    }
);


/* =========================================================
   КНОПКИ ГРИ
========================================================= */

lowerButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        playPrediction(
            "lower"
        );

    }
);


higherButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        playPrediction(
            "higher"
        );

    }
);


/* =========================================================
   ПІДТВЕРДЖЕННЯ ВИХОДУ
========================================================= */

confirmExitButton.addEventListener(
    "click",
    () => {

        confirmExitGame();

    }
);


cancelExitButton.addEventListener(
    "click",
    () => {

        playButtonSound();

        closeExitConfirmation();

    }
);


/* =========================================================
   КНОПКИ ВІКНА РЕЗУЛЬТАТУ
========================================================= */

nextGameButton.addEventListener(
    "click",
    () => {

        playButtonSound();


        startGame(
            currentDeckSize
        );

    }
);


changeDeckButton.addEventListener(
    "click",
    () => {

        playButtonSound();


        showDeckMenu();

    }
);


resultLobbyButton.addEventListener(
    "click",
    () => {

        playButtonSound();


        showMainMenu();

    }
);


/* =========================================================
   ЗАХИСТ ВІД ВИПАДКОВОГО ЗАКРИТТЯ ВКЛАДКИ
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            !gameOver &&
            gameScreen &&
            !gameScreen.classList.contains(
                "hidden"
            ) &&
            deck.length > 0 &&
            stacks.length > 0
        ) {

            saveCurrentGame();


            event.preventDefault();

            event.returnValue =
                "";

        }

    }
);


/* =========================================================
   ПОЧАТКОВЕ ЗАВАНТАЖЕННЯ
========================================================= */

loadProfile();

loadSettings();

applyLanguage();

hideGameResult();

closeExitConfirmation();

updateContinueGameArea();

updateAchievementCounters();

showMainMenu();