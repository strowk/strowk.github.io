(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'trustmatrix-js_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'trustmatrix-js_main'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'trustmatrix-js_main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'trustmatrix-js_main'.");
    }
    root['trustmatrix-js_main'] = factory(typeof this['trustmatrix-js_main'] === 'undefined' ? {} : this['trustmatrix-js_main'], kotlin, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var kotlin = Kotlin.kotlin;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var canvas = $module$kotlinx_html_js.kotlinx.html.canvas_q2368u$;
  GameChoice.prototype = Object.create(Enum.prototype);
  GameChoice.prototype.constructor = GameChoice;
  SimpleStrongestNeighbourMutation.prototype = Object.create(PlayerMutation.prototype);
  SimpleStrongestNeighbourMutation.prototype.constructor = SimpleStrongestNeighbourMutation;
  SpawnMutation.prototype = Object.create(PlayerMutation.prototype);
  SpawnMutation.prototype.constructor = SpawnMutation;
  SpawnMutationUniform.prototype = Object.create(PlayerMutation.prototype);
  SpawnMutationUniform.prototype.constructor = SpawnMutationUniform;
  SpawnMutationConfigurable.prototype = Object.create(PlayerMutation.prototype);
  SpawnMutationConfigurable.prototype.constructor = SpawnMutationConfigurable;
  InitialDistribution.prototype = Object.create(Enum.prototype);
  InitialDistribution.prototype.constructor = InitialDistribution;
  LogLevels.prototype = Object.create(Enum.prototype);
  LogLevels.prototype.constructor = LogLevels;
  JsColors.prototype = Object.create(Enum.prototype);
  JsColors.prototype.constructor = JsColors;
  function GameChoice(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameChoice_initFields() {
    GameChoice_initFields = function () {
    };
    GameChoice$COOPERATE_instance = new GameChoice('COOPERATE', 0);
    GameChoice$CHEAT_instance = new GameChoice('CHEAT', 1);
  }
  var GameChoice$COOPERATE_instance;
  function GameChoice$COOPERATE_getInstance() {
    GameChoice_initFields();
    return GameChoice$COOPERATE_instance;
  }
  var GameChoice$CHEAT_instance;
  function GameChoice$CHEAT_getInstance() {
    GameChoice_initFields();
    return GameChoice$CHEAT_instance;
  }
  GameChoice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameChoice',
    interfaces: [Enum]
  };
  function GameChoice$values() {
    return [GameChoice$COOPERATE_getInstance(), GameChoice$CHEAT_getInstance()];
  }
  GameChoice.values = GameChoice$values;
  function GameChoice$valueOf(name) {
    switch (name) {
      case 'COOPERATE':
        return GameChoice$COOPERATE_getInstance();
      case 'CHEAT':
        return GameChoice$CHEAT_getInstance();
      default:Kotlin.throwISE('No enum constant com.trustmatrix.GameChoice.' + name);
    }
  }
  GameChoice.valueOf_61zpoe$ = GameChoice$valueOf;
  function GameResult(leftIncome, rightIncome, leftChoice, rightChoice) {
    this.leftIncome = leftIncome;
    this.rightIncome = rightIncome;
    this.leftChoice = leftChoice;
    this.rightChoice = rightChoice;
  }
  GameResult.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameResult',
    interfaces: []
  };
  GameResult.prototype.component1 = function () {
    return this.leftIncome;
  };
  GameResult.prototype.component2 = function () {
    return this.rightIncome;
  };
  GameResult.prototype.component3 = function () {
    return this.leftChoice;
  };
  GameResult.prototype.component4 = function () {
    return this.rightChoice;
  };
  GameResult.prototype.copy_aaaqfg$ = function (leftIncome, rightIncome, leftChoice, rightChoice) {
    return new GameResult(leftIncome === void 0 ? this.leftIncome : leftIncome, rightIncome === void 0 ? this.rightIncome : rightIncome, leftChoice === void 0 ? this.leftChoice : leftChoice, rightChoice === void 0 ? this.rightChoice : rightChoice);
  };
  GameResult.prototype.toString = function () {
    return 'GameResult(leftIncome=' + Kotlin.toString(this.leftIncome) + (', rightIncome=' + Kotlin.toString(this.rightIncome)) + (', leftChoice=' + Kotlin.toString(this.leftChoice)) + (', rightChoice=' + Kotlin.toString(this.rightChoice)) + ')';
  };
  GameResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.leftIncome) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightIncome) | 0;
    result = result * 31 + Kotlin.hashCode(this.leftChoice) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightChoice) | 0;
    return result;
  };
  GameResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.leftIncome, other.leftIncome) && Kotlin.equals(this.rightIncome, other.rightIncome) && Kotlin.equals(this.leftChoice, other.leftChoice) && Kotlin.equals(this.rightChoice, other.rightChoice)))));
  };
  function PersonalGameResult(myIncome, opponentIncome, myChoice, opponentChoice) {
    this.myIncome = myIncome;
    this.opponentIncome = opponentIncome;
    this.myChoice = myChoice;
    this.opponentChoice = opponentChoice;
  }
  PersonalGameResult.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PersonalGameResult',
    interfaces: []
  };
  function PersonalGameResult_init(ind, left, $this) {
    $this = $this || Object.create(PersonalGameResult.prototype);
    PersonalGameResult.call($this, left ? ind.leftIncome : ind.rightIncome, left ? ind.rightIncome : ind.leftIncome, left ? ind.leftChoice : ind.rightChoice, left ? ind.rightChoice : ind.leftChoice);
    return $this;
  }
  PersonalGameResult.prototype.component1 = function () {
    return this.myIncome;
  };
  PersonalGameResult.prototype.component2 = function () {
    return this.opponentIncome;
  };
  PersonalGameResult.prototype.component3 = function () {
    return this.myChoice;
  };
  PersonalGameResult.prototype.component4 = function () {
    return this.opponentChoice;
  };
  PersonalGameResult.prototype.copy_aaaqfg$ = function (myIncome, opponentIncome, myChoice, opponentChoice) {
    return new PersonalGameResult(myIncome === void 0 ? this.myIncome : myIncome, opponentIncome === void 0 ? this.opponentIncome : opponentIncome, myChoice === void 0 ? this.myChoice : myChoice, opponentChoice === void 0 ? this.opponentChoice : opponentChoice);
  };
  PersonalGameResult.prototype.toString = function () {
    return 'PersonalGameResult(myIncome=' + Kotlin.toString(this.myIncome) + (', opponentIncome=' + Kotlin.toString(this.opponentIncome)) + (', myChoice=' + Kotlin.toString(this.myChoice)) + (', opponentChoice=' + Kotlin.toString(this.opponentChoice)) + ')';
  };
  PersonalGameResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.myIncome) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponentIncome) | 0;
    result = result * 31 + Kotlin.hashCode(this.myChoice) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponentChoice) | 0;
    return result;
  };
  PersonalGameResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.myIncome, other.myIncome) && Kotlin.equals(this.opponentIncome, other.opponentIncome) && Kotlin.equals(this.myChoice, other.myChoice) && Kotlin.equals(this.opponentChoice, other.opponentChoice)))));
  };
  function Game(rule) {
    this.rule = rule;
  }
  Game.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function GameHistory(game) {
    this.game = game;
    this.currentRound = 0;
    this.gameResults = ArrayList_init();
  }
  GameHistory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameHistory',
    interfaces: []
  };
  function PersonalGameHistory(gameHistory, left) {
    this.gameHistory = gameHistory;
    this.left = left;
  }
  PersonalGameHistory.prototype.get_za3lpa$ = function (i) {
    return PersonalGameResult_init(this.gameHistory.gameResults.get_za3lpa$(i), this.left);
  };
  PersonalGameHistory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PersonalGameHistory',
    interfaces: []
  };
  function Strategy(play, color, name) {
    Strategy$defaults_getInstance();
    if (name === void 0)
      name = 'default';
    this.play = play;
    this.color = color;
    this.name = name;
  }
  function Strategy$defaults() {
    Strategy$defaults_instance = this;
    this.alwaysCooperate = new Strategy(Strategy$defaults$alwaysCooperate$lambda, Color$Companion_getInstance().WHITE, 'alwaysCooperate');
    this.alwaysCheat = new Strategy(Strategy$defaults$alwaysCheat$lambda, Color$Companion_getInstance().BLACK, 'alwaysCheat');
    this.anEyeForAnEye = new Strategy(Strategy$defaults$anEyeForAnEye$lambda, Color$Companion_getInstance().BLUE, 'anEyeForAnEye');
    this.smartOne = new Strategy(Strategy$defaults$smartOne$lambda, Color$Companion_getInstance().YELLOW, 'smartOne');
  }
  function Strategy$defaults$alwaysCooperate$lambda(it) {
    return GameChoice$COOPERATE_getInstance();
  }
  function Strategy$defaults$alwaysCheat$lambda(it) {
    return GameChoice$CHEAT_getInstance();
  }
  function Strategy$defaults$anEyeForAnEye$lambda(it) {
    if (it.gameHistory.currentRound === 0) {
      return GameChoice$COOPERATE_getInstance();
    }
     else {
      return it.get_za3lpa$(it.gameHistory.currentRound - 1 | 0).opponentChoice;
    }
  }
  function Strategy$defaults$smartOne$lambda(it) {
    if (it.gameHistory.currentRound === 0) {
      return GameChoice$CHEAT_getInstance();
    }
     else {
      if (it.gameHistory.currentRound === 1) {
        return GameChoice$COOPERATE_getInstance();
      }
       else {
        var firstOpponentChoice = it.get_za3lpa$(0).opponentChoice;
        var secondOpponentChoice = it.get_za3lpa$(1).opponentChoice;
        if (firstOpponentChoice === GameChoice$CHEAT_getInstance() && secondOpponentChoice === GameChoice$CHEAT_getInstance()) {
          GameChoice$CHEAT_getInstance();
        }
        if (firstOpponentChoice === GameChoice$COOPERATE_getInstance() && secondOpponentChoice === GameChoice$CHEAT_getInstance()) {
          GameChoice$COOPERATE_getInstance();
        }
        if (firstOpponentChoice === GameChoice$CHEAT_getInstance() && secondOpponentChoice === GameChoice$COOPERATE_getInstance()) {
          GameChoice$COOPERATE_getInstance();
        }
        if (firstOpponentChoice === GameChoice$COOPERATE_getInstance() && secondOpponentChoice === GameChoice$COOPERATE_getInstance()) {
          GameChoice$CHEAT_getInstance();
        }
        return GameChoice$COOPERATE_getInstance();
      }
    }
  }
  Strategy$defaults.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'defaults',
    interfaces: []
  };
  var Strategy$defaults_instance = null;
  function Strategy$defaults_getInstance() {
    if (Strategy$defaults_instance === null) {
      new Strategy$defaults();
    }
    return Strategy$defaults_instance;
  }
  Strategy.prototype.toString = function () {
    return this.name;
  };
  Strategy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Strategy',
    interfaces: []
  };
  function PlayerMutation() {
  }
  PlayerMutation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PlayerMutation',
    interfaces: []
  };
  function SimpleStrongestNeighbourMutation(random, distortion) {
    SimpleStrongestNeighbourMutation$Companion_getInstance();
    if (distortion === void 0)
      distortion = 0.5;
    PlayerMutation.call(this);
    this.random = random;
    this.distortion = distortion;
  }
  function SimpleStrongestNeighbourMutation$Companion() {
    SimpleStrongestNeighbourMutation$Companion_instance = this;
    this.log = LoggerBuilder$Companion_getInstance().factory(Kotlin.getKClass(SimpleStrongestNeighbourMutation)).getLogger();
  }
  SimpleStrongestNeighbourMutation$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SimpleStrongestNeighbourMutation$Companion_instance = null;
  function SimpleStrongestNeighbourMutation$Companion_getInstance() {
    if (SimpleStrongestNeighbourMutation$Companion_instance === null) {
      new SimpleStrongestNeighbourMutation$Companion();
    }
    return SimpleStrongestNeighbourMutation$Companion_instance;
  }
  function SimpleStrongestNeighbourMutation$mutate$lambda(player1, player2) {
    return Kotlin.primitiveCompareTo(player1.generationIncomeToShow, player2.generationIncomeToShow) * -1 | 0;
  }
  SimpleStrongestNeighbourMutation.prototype.mutate_akjf9f$ = function (player) {
    var tmp$;
    if (this.random.nextDouble() > 1.0 - this.distortion) {
      return null;
    }
    var gamePosition = player.gamePosition;
    if (gamePosition == null) {
      SimpleStrongestNeighbourMutation$Companion_getInstance().log.error_61zpoe$('Strange things happen: player without position plays');
      throw new RuntimeException('Player without position cannot play');
    }
    var $receiver = gamePosition.neighborPositions;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.player);
    }
    var sortedByIncome = sortedWith(destination, new Kotlin.kotlin.Comparator_x4fedy$$f(SimpleStrongestNeighbourMutation$mutate$lambda));
    var maxIncome = first(sortedByIncome).generationIncomeToShow;
    var tmp$_1;
    var list = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    tmp$_1 = sortedByIncome.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      if (!(item_0.generationIncomeToShow === maxIncome))
        break;
      list.add_11rb$(item_0);
    }
    var strongest = list;
    var randomStrongest = this.random.nextInt_za3lpa$(strongest.size);
    var strongestNeighbour = strongest.get_za3lpa$(randomStrongest);
    SimpleStrongestNeighbourMutation$Companion_getInstance().log.debug_61zpoe$('Strongest neighbour is in ' + Kotlin.toString((tmp$ = strongestNeighbour.gamePosition) != null ? tmp$.coordinateText() : null) + ' ' + ('and have ' + strongestNeighbour.strategy + ' strategy ') + ('with ' + strongestNeighbour.generationIncomeToShow + ' generation income'));
    if (!Kotlin.equals(player.strategy, strongestNeighbour.strategy) && player.generationIncomeToShow < strongestNeighbour.generationIncomeToShow) {
      var mutateTo = strongestNeighbour.strategy;
      return new Player(mutateTo, player.generation);
    }
    return null;
  };
  SimpleStrongestNeighbourMutation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SimpleStrongestNeighbourMutation',
    interfaces: [PlayerMutation]
  };
  function SpawnMutation(spawnStrategy, probability, random) {
    SpawnMutation$Companion_getInstance();
    if (probability === void 0)
      probability = 0.001;
    PlayerMutation.call(this);
    this.spawnStrategy = spawnStrategy;
    this.probability = probability;
    this.random = random;
  }
  function SpawnMutation$Companion() {
    SpawnMutation$Companion_instance = this;
    this.log = LoggerBuilder$Companion_getInstance().factory(Kotlin.getKClass(SpawnMutation)).getLogger();
  }
  SpawnMutation$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpawnMutation$Companion_instance = null;
  function SpawnMutation$Companion_getInstance() {
    if (SpawnMutation$Companion_instance === null) {
      new SpawnMutation$Companion();
    }
    return SpawnMutation$Companion_instance;
  }
  SpawnMutation.prototype.mutate_akjf9f$ = function (player) {
    if (!Kotlin.equals(player.strategy, this.spawnStrategy) && this.random.nextDouble() > 1.0 - this.probability) {
      SpawnMutation$Companion_getInstance().log.debug_61zpoe$(player + ' spontaneously become ' + this.spawnStrategy);
      return new Player(this.spawnStrategy, player.generation);
    }
    return null;
  };
  SpawnMutation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpawnMutation',
    interfaces: [PlayerMutation]
  };
  function SpawnMutationUniform(spawnStrategies, probability, random) {
    if (probability === void 0)
      probability = 0.001 * spawnStrategies.size;
    PlayerMutation.call(this);
    this.spawnStrategies = spawnStrategies;
    this.probability = probability;
    this.random = random;
  }
  SpawnMutationUniform.prototype.mutate_akjf9f$ = function (player) {
    var spawnHappened = this.random.nextDouble() > 1.0 - this.probability;
    if (!spawnHappened)
      return null;
    var $receiver = this.spawnStrategies;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!Kotlin.equals(element, player.strategy))
        destination.add_11rb$(element);
    }
    var spawnAllowedStrategies = destination;
    return new Player(spawnAllowedStrategies.get_za3lpa$(this.random.nextInt_za3lpa$(spawnAllowedStrategies.size)), player.generation);
  };
  SpawnMutationUniform.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpawnMutationUniform',
    interfaces: [PlayerMutation]
  };
  function SpawnStrategyControl(spawnStrategy, probabilityOnGeneration) {
    if (probabilityOnGeneration === void 0)
      probabilityOnGeneration = SpawnStrategyControl_init$lambda;
    this.spawnStrategy = spawnStrategy;
    this.probabilityOnGeneration = probabilityOnGeneration;
  }
  function SpawnStrategyControl_init$lambda(it) {
    return 0.001;
  }
  SpawnStrategyControl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpawnStrategyControl',
    interfaces: []
  };
  function Generation(previous, number, mutations) {
    this.previous = previous;
    this.number = number;
    this.mutations = mutations;
  }
  Generation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Generation',
    interfaces: []
  };
  function Generation_init(parent, $this) {
    $this = $this || Object.create(Generation.prototype);
    Generation.call($this, parent, parent.number.add(Kotlin.Long.fromInt(1)), parent.mutations);
    return $this;
  }
  function Generation_init_0(mutations, $this) {
    $this = $this || Object.create(Generation.prototype);
    Generation.call($this, null, Kotlin.Long.ZERO, mutations);
    return $this;
  }
  function SpawnMutationConfigurable(spawnStrategies, random) {
    PlayerMutation.call(this);
    this.spawnStrategies = spawnStrategies;
    this.random = random;
  }
  SpawnMutationConfigurable.prototype.mutate_akjf9f$ = function (player) {
    var coin = this.random.nextDouble();
    var spawnPosition = {v: 0.0};
    var tmp$;
    tmp$ = this.spawnStrategies.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      spawnPosition.v += element.probabilityOnGeneration(player.generation);
      if (spawnPosition.v > coin) {
        return new Player(element.spawnStrategy, player.generation);
      }
    }
    return null;
  };
  SpawnMutationConfigurable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpawnMutationConfigurable',
    interfaces: [PlayerMutation]
  };
  function Player(strategy, generation) {
    Player$Companion_getInstance();
    this.strategy = strategy;
    this.generation = generation;
    this.generationIncomeToShow = 0;
    this.generationOpponentsMet = 0;
    this.generationIncome = 0;
    this.gamePosition = null;
    this.color = this.strategy.color;
  }
  function Player$Companion() {
    Player$Companion_instance = this;
    this.log = LoggerBuilder$Companion_getInstance().factory(Kotlin.getKClass(Player)).getLogger();
  }
  Player$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Player$Companion_instance = null;
  function Player$Companion_getInstance() {
    if (Player$Companion_instance === null) {
      new Player$Companion();
    }
    return Player$Companion_instance;
  }
  Player.prototype.toString = function () {
    return this.strategy + ' on ' + Kotlin.toString(this.gamePosition);
  };
  Player.prototype.mutate_zidw2p$ = function (mutations) {
    if (mutations === void 0)
      mutations = this.generation.mutations;
    var mutateIncomeModifier = this.generationIncome;
    var gamePosition = this.gamePosition;
    if (gamePosition == null) {
      Player$Companion_getInstance().log.error_61zpoe$('Strange things happen: player without position plays');
      throw new RuntimeException('Player without position cannot play');
    }
    this.generationIncome = 0;
    Player$Companion_getInstance().log.debug_61zpoe$('Mutate player on (' + gamePosition.i + ', ' + gamePosition.j + ') of ' + this.strategy + ' with modifier ' + mutateIncomeModifier + ' ' + ('and opponents met in this generation ' + this.generationOpponentsMet));
    this.generationOpponentsMet = 0;
    var tmp$;
    tmp$ = mutations.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = element.mutate_akjf9f$(this);
      if ($receiver != null) {
        return $receiver;
      }
    }
    Player$Companion_getInstance().log.debug_61zpoe$('No mutations applied, ' + this.strategy + ' stays on ' + Kotlin.toString(gamePosition));
    return this;
  };
  Player.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function GamePosition(i, j, player, determineNeighbors) {
    this.i = i;
    this.j = j;
    this.player = player;
    this.determineNeighbors = determineNeighbors;
    this.nextPlayer = null;
    this.player.gamePosition = this;
    this.neighborPositions$delegate = lazy(GamePosition$neighborPositions$lambda(this));
  }
  GamePosition.prototype.placePlayer_akjf9f$ = function (player) {
    this.player = player;
    player.gamePosition = this;
  };
  Object.defineProperty(GamePosition.prototype, 'neighborPositions', {
    get: function () {
      var $receiver = this.neighborPositions$delegate;
      new Kotlin.PropertyMetadata('neighborPositions');
      return $receiver.value;
    }
  });
  GamePosition.prototype.prepareForGame_reznsq$ = function (generation) {
    var tmp$;
    this.player = (tmp$ = this.nextPlayer) != null ? tmp$ : this.player;
    this.player.generation = generation;
  };
  GamePosition.prototype.compareTo_iv0lr7$ = function (gamePosition) {
    if (this.i === gamePosition.i)
      return Kotlin.primitiveCompareTo(this.j, gamePosition.j);
    return Kotlin.primitiveCompareTo(this.i, gamePosition.i);
  };
  GamePosition.prototype.mutate_zidw2p$ = function (mutations) {
    var mutatePlayer = this.player.mutate_zidw2p$(mutations);
    if (this.player === mutatePlayer) {
      this.nextPlayer = null;
    }
     else {
      mutatePlayer.gamePosition = this;
      this.nextPlayer = mutatePlayer;
    }
  };
  GamePosition.prototype.color = function () {
    return this.player.color.toPlatform();
  };
  GamePosition.prototype.coordinateText = function () {
    return '(' + this.i + ', ' + this.j + ')';
  };
  GamePosition.prototype.toString = function () {
    return this.coordinateText();
  };
  function GamePosition$neighborPositions$lambda(this$GamePosition) {
    return function () {
      var $receiver = this$GamePosition.determineNeighbors;
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item());
      }
      return toList(destination);
    };
  }
  GamePosition.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GamePosition',
    interfaces: []
  };
  function Neighbourhood(leftPosition, rightPosition) {
    this.leftPosition = leftPosition;
    this.rightPosition = rightPosition;
    if (this.leftPosition.compareTo_iv0lr7$(this.rightPosition) > 0) {
      var $receiver = this.rightPosition;
      this.rightPosition = this.leftPosition;
      this.leftPosition = $receiver;
    }
  }
  Neighbourhood.prototype.playGame_k0uidm$ = function (roundsNumber, game) {
    var gameHistory = new GameHistory(game);
    var leftGameHistory = new PersonalGameHistory(gameHistory, true);
    var rightGameHistory = new PersonalGameHistory(gameHistory, false);
    var size = Kotlin.numberToInt(roundsNumber);
    var list = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(size);
    var tmp$;
    tmp$ = size - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      var tmp$_0 = list.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3;
      var leftChoice = this.leftPosition.player.strategy.play(leftGameHistory);
      var rightChoice = this.rightPosition.player.strategy.play(rightGameHistory);
      var gameResult = game.rule(leftChoice, rightChoice);
      gameHistory.gameResults.add_11rb$(gameResult);
      tmp$_1 = this.leftPosition.player;
      tmp$_1.generationIncome = tmp$_1.generationIncome + gameResult.leftIncome | 0;
      tmp$_2 = this.rightPosition.player;
      tmp$_2.generationIncome = tmp$_2.generationIncome + gameResult.rightIncome | 0;
      tmp$_0.call(list, (tmp$_3 = gameHistory.currentRound, gameHistory.currentRound = tmp$_3 + 1 | 0, tmp$_3));
    }
    var tmp$_4;
    tmp$_4 = this.leftPosition.player;
    tmp$_4.generationOpponentsMet = tmp$_4.generationOpponentsMet + 1 | 0;
    var tmp$_5;
    tmp$_5 = this.rightPosition.player;
    tmp$_5.generationOpponentsMet = tmp$_5.generationOpponentsMet + 1 | 0;
    this.leftPosition.player.generationIncomeToShow = this.leftPosition.player.generationIncome;
    this.rightPosition.player.generationIncomeToShow = this.rightPosition.player.generationIncome;
  };
  Neighbourhood.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Neighbourhood',
    interfaces: []
  };
  Neighbourhood.prototype.component1 = function () {
    return this.leftPosition;
  };
  Neighbourhood.prototype.component2 = function () {
    return this.rightPosition;
  };
  Neighbourhood.prototype.copy_rcix84$ = function (leftPosition, rightPosition) {
    return new Neighbourhood(leftPosition === void 0 ? this.leftPosition : leftPosition, rightPosition === void 0 ? this.rightPosition : rightPosition);
  };
  Neighbourhood.prototype.toString = function () {
    return 'Neighbourhood(leftPosition=' + Kotlin.toString(this.leftPosition) + (', rightPosition=' + Kotlin.toString(this.rightPosition)) + ')';
  };
  Neighbourhood.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.leftPosition) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightPosition) | 0;
    return result;
  };
  Neighbourhood.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.leftPosition, other.leftPosition) && Kotlin.equals(this.rightPosition, other.rightPosition)))));
  };
  function getShuffleComparator$lambda(closure$random) {
    return function (f, f_0) {
      return closure$random.nextInt_za3lpa$(2) - 1 | 0;
    };
  }
  function getShuffleComparator(clazz, random) {
    return new Kotlin.kotlin.Comparator_x4fedy$$f(getShuffleComparator$lambda(random));
  }
  function InitialDistribution(name, ordinal, player) {
    Enum.call(this);
    this.player = player;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InitialDistribution_initFields() {
    InitialDistribution_initFields = function () {
    };
    InitialDistribution$ALL_ALWAYS_COOPERATE_instance = new InitialDistribution('ALL_ALWAYS_COOPERATE', 0, InitialDistribution$InitialDistribution$ALL_ALWAYS_COOPERATE_init$lambda);
    InitialDistribution$ALL_ALWAYS_CHEAT_instance = new InitialDistribution('ALL_ALWAYS_CHEAT', 1, InitialDistribution$InitialDistribution$ALL_ALWAYS_CHEAT_init$lambda);
  }
  function InitialDistribution$InitialDistribution$ALL_ALWAYS_COOPERATE_init$lambda(f, f_0, mutations) {
    return new Player(Strategy$defaults_getInstance().alwaysCooperate, Generation_init_0(mutations));
  }
  var InitialDistribution$ALL_ALWAYS_COOPERATE_instance;
  function InitialDistribution$ALL_ALWAYS_COOPERATE_getInstance() {
    InitialDistribution_initFields();
    return InitialDistribution$ALL_ALWAYS_COOPERATE_instance;
  }
  function InitialDistribution$InitialDistribution$ALL_ALWAYS_CHEAT_init$lambda(f, f_0, mutations) {
    return new Player(Strategy$defaults_getInstance().alwaysCheat, Generation_init_0(mutations));
  }
  var InitialDistribution$ALL_ALWAYS_CHEAT_instance;
  function InitialDistribution$ALL_ALWAYS_CHEAT_getInstance() {
    InitialDistribution_initFields();
    return InitialDistribution$ALL_ALWAYS_CHEAT_instance;
  }
  InitialDistribution.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InitialDistribution',
    interfaces: [Enum]
  };
  function InitialDistribution$values() {
    return [InitialDistribution$ALL_ALWAYS_COOPERATE_getInstance(), InitialDistribution$ALL_ALWAYS_CHEAT_getInstance()];
  }
  InitialDistribution.values = InitialDistribution$values;
  function InitialDistribution$valueOf(name) {
    switch (name) {
      case 'ALL_ALWAYS_COOPERATE':
        return InitialDistribution$ALL_ALWAYS_COOPERATE_getInstance();
      case 'ALL_ALWAYS_CHEAT':
        return InitialDistribution$ALL_ALWAYS_CHEAT_getInstance();
      default:Kotlin.throwISE('No enum constant com.trustmatrix.InitialDistribution.' + name);
    }
  }
  InitialDistribution.valueOf_61zpoe$ = InitialDistribution$valueOf;
  function TrustMatrix(xDimension, yDimension, initialDistribution, roundsNumber, game, platformTools, mutations) {
    TrustMatrix$defaults_getInstance();
    if (initialDistribution === void 0)
      initialDistribution = TrustMatrix$defaults_getInstance().ALL_ALWAYS_COOPERATE_DISTR;
    if (roundsNumber === void 0)
      roundsNumber = 20;
    if (game === void 0)
      game = TrustMatrix$defaults_getInstance().DEFAULT_DILEMMA_GAME;
    if (mutations === void 0)
      mutations = listOf([new SimpleStrongestNeighbourMutation(platformTools.random()), new SpawnMutationUniform(setOf([Strategy$defaults_getInstance().alwaysCheat, Strategy$defaults_getInstance().alwaysCooperate, Strategy$defaults_getInstance().anEyeForAnEye]), void 0, platformTools.random())]);
    this.xDimension = xDimension;
    this.yDimension = yDimension;
    this.initialDistribution = initialDistribution;
    this.roundsNumber = roundsNumber;
    this.game = game;
    this.platformTools = platformTools;
    this.mutations = mutations;
    this.generation = Generation_init_0(this.mutations);
    var size = this.yDimension;
    var array = Array(size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var size_0 = this.xDimension;
      var array_0 = Array(size_0);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = new GamePosition(i, i_0, this.initialDistribution(i, i_0, this.mutations), arrayListOf([TrustMatrix$positionMatrix$lambda$lambda$lambda(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_0(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_1(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_2(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_3(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_4(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_5(i, i_0, this), TrustMatrix$positionMatrix$lambda$lambda$lambda_6(i, i_0, this)]));
      }
      array[i] = array_0;
    }
    this.positionMatrix = array;
    this.neighbourhood = null;
    var builtNeighbourhood = HashSet_init();
    TrustMatrix$defaults_getInstance().log.info_61zpoe$('Prepare neighbourhood');
    var $receiver = Kotlin.arrayIterator(this.positionMatrix);
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      var $receiver_0 = Kotlin.arrayIterator(element);
      while ($receiver_0.hasNext()) {
        var element_0 = $receiver_0.next();
        var position = element_0;
        var tmp$_1;
        tmp$_1 = element_0.neighborPositions.iterator();
        while (tmp$_1.hasNext()) {
          var element_1 = tmp$_1.next();
          TrustMatrix$defaults_getInstance().log.trace_61zpoe$('Prepare neighbourhood for ' + position + ' and ' + element_1);
          builtNeighbourhood.add_11rb$(new Neighbourhood(position, element_1));
        }
      }
    }
    TrustMatrix$defaults_getInstance().log.info_61zpoe$('Prepared ' + builtNeighbourhood.size + ' neighbourhoods');
    this.neighbourhood = builtNeighbourhood;
  }
  function TrustMatrix$defaults() {
    TrustMatrix$defaults_instance = this;
    this.ALL_ALWAYS_COOPERATE_DISTR = InitialDistribution$ALL_ALWAYS_COOPERATE_getInstance().player;
    this.ALL_ALWAYS_CHEAT_DISTR = InitialDistribution$ALL_ALWAYS_CHEAT_getInstance().player;
    this.DEFAULT_DILEMMA_GAME = new Game(TrustMatrix$defaults$DEFAULT_DILEMMA_GAME$lambda);
    this.log = LoggerBuilder$Companion_getInstance().factory(Kotlin.getKClass(TrustMatrix)).getLogger();
  }
  function TrustMatrix$defaults$DEFAULT_DILEMMA_GAME$lambda(leftChoice, rightChoice) {
    var tmp$, tmp$_0;
    if (leftChoice === rightChoice) {
      tmp$ = leftChoice === GameChoice$COOPERATE_getInstance() ? 2 : 0;
    }
     else {
      tmp$ = leftChoice === GameChoice$COOPERATE_getInstance() ? -1 : 3;
    }
    if (leftChoice === rightChoice) {
      tmp$_0 = leftChoice === GameChoice$COOPERATE_getInstance() ? 2 : 0;
    }
     else {
      tmp$_0 = leftChoice === GameChoice$COOPERATE_getInstance() ? 3 : -1;
    }
    return new GameResult(tmp$, tmp$_0, leftChoice, rightChoice);
  }
  TrustMatrix$defaults.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'defaults',
    interfaces: []
  };
  var TrustMatrix$defaults_instance = null;
  function TrustMatrix$defaults_getInstance() {
    if (TrustMatrix$defaults_instance === null) {
      new TrustMatrix$defaults();
    }
    return TrustMatrix$defaults_instance;
  }
  TrustMatrix.prototype.getGamePositionByCoordinates_vux9f0$ = function (i, j) {
    var iOffset = i % this.yDimension;
    var jOffset = j % this.xDimension;
    var realI = iOffset >= 0 ? iOffset : this.yDimension + iOffset | 0;
    var realJ = jOffset >= 0 ? jOffset : this.xDimension + jOffset | 0;
    return this.positionMatrix[realI][realJ];
  };
  TrustMatrix.prototype.play = function () {
    var tmp$;
    tmp$ = this.neighbourhood.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.playGame_k0uidm$(this.roundsNumber, this.game);
    }
  };
  TrustMatrix.prototype.mutate = function () {
    var $receiver = this.positionMatrix;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
        var element_0 = element[tmp$_0];
        element_0.mutate_zidw2p$(this.mutations);
      }
    }
  };
  TrustMatrix.prototype.generate = function () {
    this.play();
    this.mutate();
    this.generation = Generation_init(this.generation);
    var $receiver = this.positionMatrix;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
        var element_0 = element[tmp$_0];
        element_0.prepareForGame_reznsq$(this.generation);
      }
    }
  };
  function TrustMatrix$positionMatrix$lambda$lambda$lambda(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i - 1 | 0, closure$j - 1 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_0(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i - 0 | 0, closure$j - 1 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_1(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i - 1 | 0, closure$j - 0 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_2(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i + 1 | 0, closure$j + 1 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_3(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i + 1 | 0, closure$j + 0 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_4(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i + 0 | 0, closure$j + 1 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_5(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i - 1 | 0, closure$j + 1 | 0);
    };
  }
  function TrustMatrix$positionMatrix$lambda$lambda$lambda_6(closure$i, closure$j, this$TrustMatrix) {
    return function () {
      return this$TrustMatrix.getGamePositionByCoordinates_vux9f0$(closure$i + 1 | 0, closure$j - 1 | 0);
    };
  }
  TrustMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TrustMatrix',
    interfaces: []
  };
  function PlatformTools() {
  }
  PlatformTools.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'PlatformTools',
    interfaces: []
  };
  function Random() {
    Random$Companion_getInstance();
  }
  function Random$Companion() {
    Random$Companion_instance = this;
    this.RANDOM_SOURCE = this.RANDOM_SOURCE;
  }
  Random$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Random$Companion_instance = null;
  function Random$Companion_getInstance() {
    if (Random$Companion_instance === null) {
      new Random$Companion();
    }
    return Random$Companion_instance;
  }
  Random.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Random',
    interfaces: []
  };
  function Logger() {
  }
  Logger.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Logger',
    interfaces: []
  };
  function LoggerFactory() {
  }
  LoggerFactory.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'LoggerFactory',
    interfaces: []
  };
  function LoggerBuilder() {
    LoggerBuilder$Companion_getInstance();
  }
  function LoggerBuilder$Companion() {
    LoggerBuilder$Companion_instance = this;
    this.factory = this.factory;
  }
  LoggerBuilder$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LoggerBuilder$Companion_instance = null;
  function LoggerBuilder$Companion_getInstance() {
    if (LoggerBuilder$Companion_instance === null) {
      new LoggerBuilder$Companion();
    }
    return LoggerBuilder$Companion_instance;
  }
  LoggerBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LoggerBuilder',
    interfaces: []
  };
  function Color() {
    Color$Companion_getInstance();
  }
  function Color$Companion() {
    Color$Companion_instance = this;
    this.BLACK = this.BLACK;
    this.WHITE = this.WHITE;
    this.YELLOW = this.YELLOW;
    this.GREEN = this.GREEN;
    this.BLUE = this.BLUE;
  }
  Color$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Color',
    interfaces: []
  };
  function JsPlatformTools() {
    JsPlatformTools$Companion_getInstance();
  }
  function JsPlatformTools$Companion() {
    JsPlatformTools$Companion_instance = this;
    LoggerBuilder$Companion_getInstance().factory = JsPlatformTools$JsPlatformTools$Companion_init$lambda;
    var log = LoggerBuilder$Companion_getInstance().factory(Kotlin.getKClass(JsPlatformTools)).getLogger();
    log.info_61zpoe$('Tools initialization');
    log.info_61zpoe$('Initialize Logger: ' + Kotlin.getKClass(JsConsoleLogger));
    log.info_61zpoe$('Initialize Color: ' + Kotlin.getKClass(JsColor));
    (new JsColor(JsColors$WHITE_getInstance())).toPlatform();
    log.info_61zpoe$('Initialize Random: ' + Kotlin.getKClass(JsRandom));
    Random$Companion_getInstance().RANDOM_SOURCE = new JsRandom();
  }
  function JsPlatformTools$JsPlatformTools$Companion_init$lambda(it) {
    return new JsLoggerFactory(it);
  }
  JsPlatformTools$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsPlatformTools$Companion_instance = null;
  function JsPlatformTools$Companion_getInstance() {
    if (JsPlatformTools$Companion_instance === null) {
      new JsPlatformTools$Companion();
    }
    return JsPlatformTools$Companion_instance;
  }
  JsPlatformTools.prototype.random = function () {
    return Random$Companion_getInstance().RANDOM_SOURCE;
  };
  JsPlatformTools.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsPlatformTools',
    interfaces: [PlatformTools]
  };
  function JsRandom() {
  }
  JsRandom.prototype.nextDouble = function () {
    return Math.random();
  };
  JsRandom.prototype.nextInt_za3lpa$ = function (max) {
    return Math.random() * (max - 0 | 0) + 0 | 0;
  };
  JsRandom.prototype.nextInt = function () {
    return this.nextInt_za3lpa$(IntCompanionObject.MAX_VALUE - 1 | 0);
  };
  JsRandom.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsRandom',
    interfaces: [Random]
  };
  function LogLevels(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevels_initFields() {
    LogLevels_initFields = function () {
    };
    LogLevels$TRACE_instance = new LogLevels('TRACE', 0);
    LogLevels$DEBUG_instance = new LogLevels('DEBUG', 1);
    LogLevels$INFO_instance = new LogLevels('INFO', 2);
    LogLevels$ERROR_instance = new LogLevels('ERROR', 3);
  }
  var LogLevels$TRACE_instance;
  function LogLevels$TRACE_getInstance() {
    LogLevels_initFields();
    return LogLevels$TRACE_instance;
  }
  var LogLevels$DEBUG_instance;
  function LogLevels$DEBUG_getInstance() {
    LogLevels_initFields();
    return LogLevels$DEBUG_instance;
  }
  var LogLevels$INFO_instance;
  function LogLevels$INFO_getInstance() {
    LogLevels_initFields();
    return LogLevels$INFO_instance;
  }
  var LogLevels$ERROR_instance;
  function LogLevels$ERROR_getInstance() {
    LogLevels_initFields();
    return LogLevels$ERROR_instance;
  }
  LogLevels.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LogLevels',
    interfaces: [Enum]
  };
  function LogLevels$values() {
    return [LogLevels$TRACE_getInstance(), LogLevels$DEBUG_getInstance(), LogLevels$INFO_getInstance(), LogLevels$ERROR_getInstance()];
  }
  LogLevels.values = LogLevels$values;
  function LogLevels$valueOf(name) {
    switch (name) {
      case 'TRACE':
        return LogLevels$TRACE_getInstance();
      case 'DEBUG':
        return LogLevels$DEBUG_getInstance();
      case 'INFO':
        return LogLevels$INFO_getInstance();
      case 'ERROR':
        return LogLevels$ERROR_getInstance();
      default:Kotlin.throwISE('No enum constant com.trustmatrix.platform.LogLevels.' + name);
    }
  }
  LogLevels.valueOf_61zpoe$ = LogLevels$valueOf;
  function ConsoleAppender() {
    this.level = LogLevels$DEBUG_getInstance();
    this.leveledLog = ConsoleAppender$leveledLog$lambda(this);
  }
  function ConsoleAppender$leveledLog$lambda(this$ConsoleAppender) {
    return function (message, logWith, logFun) {
      if (this$ConsoleAppender.level.ordinal <= logWith.ordinal)
        logFun(message);
      else
        kotlin.Unit;
    };
  }
  ConsoleAppender.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ConsoleAppender',
    interfaces: []
  };
  function JsConsoleLogger(clazz, appender) {
    this.clazz = clazz;
    this.appender = appender;
  }
  function JsConsoleLogger$info$lambda(it) {
    console.log(it);
  }
  JsConsoleLogger.prototype.info_61zpoe$ = function (message) {
    this.appender.leveledLog(message, LogLevels$INFO_getInstance(), JsConsoleLogger$info$lambda);
  };
  function JsConsoleLogger$debug$lambda(it) {
    console.log('DEBUG:' + it);
  }
  JsConsoleLogger.prototype.debug_61zpoe$ = function (message) {
    this.appender.leveledLog(message, LogLevels$DEBUG_getInstance(), JsConsoleLogger$debug$lambda);
  };
  function JsConsoleLogger$trace$lambda(it) {
    console.log('TRACE:' + it);
  }
  JsConsoleLogger.prototype.trace_61zpoe$ = function (message) {
    this.appender.leveledLog(message, LogLevels$TRACE_getInstance(), JsConsoleLogger$trace$lambda);
  };
  function JsConsoleLogger$error$lambda(it) {
    console.error(it);
  }
  JsConsoleLogger.prototype.error_61zpoe$ = function (message) {
    this.appender.leveledLog(message, LogLevels$ERROR_getInstance(), JsConsoleLogger$error$lambda);
  };
  JsConsoleLogger.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsConsoleLogger',
    interfaces: [Logger]
  };
  function JsLoggerFactory(clazz) {
    JsLoggerFactory$Companion_getInstance();
    this.clazz = clazz;
  }
  function JsLoggerFactory$Companion() {
    JsLoggerFactory$Companion_instance = this;
    this.appender = new ConsoleAppender();
  }
  JsLoggerFactory$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsLoggerFactory$Companion_instance = null;
  function JsLoggerFactory$Companion_getInstance() {
    if (JsLoggerFactory$Companion_instance === null) {
      new JsLoggerFactory$Companion();
    }
    return JsLoggerFactory$Companion_instance;
  }
  JsLoggerFactory.prototype.getLogger = function () {
    return new JsConsoleLogger(this.clazz, JsLoggerFactory$Companion_getInstance().appender);
  };
  JsLoggerFactory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsLoggerFactory',
    interfaces: [LoggerFactory]
  };
  function JsColors(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JsColors_initFields() {
    JsColors_initFields = function () {
    };
    JsColors$BLACK_instance = new JsColors('BLACK', 0);
    JsColors$WHITE_instance = new JsColors('WHITE', 1);
    JsColors$GREEN_instance = new JsColors('GREEN', 2);
    JsColors$YELLOW_instance = new JsColors('YELLOW', 3);
    JsColors$BLUE_instance = new JsColors('BLUE', 4);
  }
  var JsColors$BLACK_instance;
  function JsColors$BLACK_getInstance() {
    JsColors_initFields();
    return JsColors$BLACK_instance;
  }
  var JsColors$WHITE_instance;
  function JsColors$WHITE_getInstance() {
    JsColors_initFields();
    return JsColors$WHITE_instance;
  }
  var JsColors$GREEN_instance;
  function JsColors$GREEN_getInstance() {
    JsColors_initFields();
    return JsColors$GREEN_instance;
  }
  var JsColors$YELLOW_instance;
  function JsColors$YELLOW_getInstance() {
    JsColors_initFields();
    return JsColors$YELLOW_instance;
  }
  var JsColors$BLUE_instance;
  function JsColors$BLUE_getInstance() {
    JsColors_initFields();
    return JsColors$BLUE_instance;
  }
  JsColors.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsColors',
    interfaces: [Enum]
  };
  function JsColors$values() {
    return [JsColors$BLACK_getInstance(), JsColors$WHITE_getInstance(), JsColors$GREEN_getInstance(), JsColors$YELLOW_getInstance(), JsColors$BLUE_getInstance()];
  }
  JsColors.values = JsColors$values;
  function JsColors$valueOf(name) {
    switch (name) {
      case 'BLACK':
        return JsColors$BLACK_getInstance();
      case 'WHITE':
        return JsColors$WHITE_getInstance();
      case 'GREEN':
        return JsColors$GREEN_getInstance();
      case 'YELLOW':
        return JsColors$YELLOW_getInstance();
      case 'BLUE':
        return JsColors$BLUE_getInstance();
      default:Kotlin.throwISE('No enum constant com.trustmatrix.platform.JsColors.' + name);
    }
  }
  JsColors.valueOf_61zpoe$ = JsColors$valueOf;
  function JsColor(color) {
    JsColor$Companion_getInstance();
    this.color = color;
  }
  JsColor.prototype.toPlatform = function () {
    return this.color;
  };
  function JsColor$Companion() {
    JsColor$Companion_instance = this;
    Color$Companion_getInstance().BLACK = new JsColor(JsColors$BLACK_getInstance());
    Color$Companion_getInstance().WHITE = new JsColor(JsColors$WHITE_getInstance());
    Color$Companion_getInstance().GREEN = new JsColor(JsColors$GREEN_getInstance());
    Color$Companion_getInstance().YELLOW = new JsColor(JsColors$YELLOW_getInstance());
    Color$Companion_getInstance().BLUE = new JsColor(JsColors$BLUE_getInstance());
  }
  JsColor$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsColor$Companion_instance = null;
  function JsColor$Companion_getInstance() {
    if (JsColor$Companion_instance === null) {
      new JsColor$Companion();
    }
    return JsColor$Companion_instance;
  }
  JsColor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsColor',
    interfaces: [Color]
  };
  function main$lambda($receiver) {
  }
  function main$lambda_0(closure$trustMatrix, closure$render, closure$canvasWidth, closure$canvasHeight, closure$log, closure$xSize, closure$ySize) {
    return function () {
      closure$trustMatrix.generate();
      drawMatrix(closure$render, closure$canvasWidth, closure$canvasHeight, closure$trustMatrix, closure$log, closure$xSize, closure$ySize);
    };
  }
  function main(args) {
    var tmp$, tmp$_0;
    document.title = 'Trust Matrix Evolution';
    var platformTools = new JsPlatformTools();
    JsLoggerFactory$Companion_getInstance().appender.level = LogLevels$INFO_getInstance();
    var log = LoggerBuilder$Companion_getInstance().factory(Kotlin.getKClassFromExpression(document)).getLogger();
    var canvas_0 = Kotlin.isType(tmp$ = canvas(get_create(document), void 0, main$lambda), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    canvas_0.height = Math.min(window.innerHeight, window.innerWidth);
    canvas_0.width = Math.min(window.innerHeight, window.innerWidth);
    var body = document.body;
    (body != null ? body : Kotlin.throwNPE()).appendChild(canvas_0);
    var render = Kotlin.isType(tmp$_0 = canvas_0.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
    var trustMatrix = new TrustMatrix(100, 100, void 0, void 0, void 0, platformTools, listOf([new SimpleStrongestNeighbourMutation(platformTools.random()), new SpawnMutationUniform(setOf([Strategy$defaults_getInstance().alwaysCheat, Strategy$defaults_getInstance().alwaysCooperate, Strategy$defaults_getInstance().anEyeForAnEye, Strategy$defaults_getInstance().smartOne]), void 0, platformTools.random())]));
    var start = (new Date()).getTime();
    var canvasWidth = canvas_0.width * 1.0;
    var canvasHeight = canvas_0.height * 1.0;
    var ySize = canvasHeight / trustMatrix.yDimension;
    var xSize = canvasWidth / trustMatrix.xDimension;
    var timerToGenerate = window.setInterval(main$lambda_0(trustMatrix, render, canvasWidth, canvasHeight, log, xSize, ySize), 400);
  }
  function drawMatrix(render, canvasWidth, canvasHeight, trustMatrix, log, xSize, ySize) {
    render.fillStyle = 'white';
    render.fillRect(0.0, 0.0, canvasWidth, canvasHeight);
    var $receiver = trustMatrix.positionMatrix;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== element.length; ++tmp$_0) {
        var element_0 = element[tmp$_0];
        var tmp$_1;
        var fillcolor = (Kotlin.isType(tmp$_1 = element_0.color(), JsColors) ? tmp$_1 : Kotlin.throwCCE()).name.toLowerCase();
        log.debug_61zpoe$('fillcolor: ' + fillcolor);
        render.fillStyle = fillcolor;
        render.fillRect(element_0.i * xSize, element_0.j * ySize, xSize, ySize);
      }
    }
  }
  Object.defineProperty(GameChoice, 'COOPERATE', {
    get: GameChoice$COOPERATE_getInstance
  });
  Object.defineProperty(GameChoice, 'CHEAT', {
    get: GameChoice$CHEAT_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$trustmatrix = package$com.trustmatrix || (package$com.trustmatrix = {});
  package$trustmatrix.GameChoice = GameChoice;
  package$trustmatrix.GameResult = GameResult;
  package$trustmatrix.PersonalGameResult_init_ewzxhy$ = PersonalGameResult_init;
  package$trustmatrix.PersonalGameResult = PersonalGameResult;
  package$trustmatrix.Game = Game;
  package$trustmatrix.GameHistory = GameHistory;
  package$trustmatrix.PersonalGameHistory = PersonalGameHistory;
  Object.defineProperty(Strategy, 'defaults', {
    get: Strategy$defaults_getInstance
  });
  package$trustmatrix.Strategy = Strategy;
  package$trustmatrix.PlayerMutation = PlayerMutation;
  Object.defineProperty(SimpleStrongestNeighbourMutation, 'Companion', {
    get: SimpleStrongestNeighbourMutation$Companion_getInstance
  });
  package$trustmatrix.SimpleStrongestNeighbourMutation = SimpleStrongestNeighbourMutation;
  Object.defineProperty(SpawnMutation, 'Companion', {
    get: SpawnMutation$Companion_getInstance
  });
  package$trustmatrix.SpawnMutation = SpawnMutation;
  package$trustmatrix.SpawnMutationUniform = SpawnMutationUniform;
  package$trustmatrix.SpawnStrategyControl = SpawnStrategyControl;
  package$trustmatrix.Generation_init_reznsq$ = Generation_init;
  package$trustmatrix.Generation_init_zidw2p$ = Generation_init_0;
  package$trustmatrix.Generation = Generation;
  package$trustmatrix.SpawnMutationConfigurable = SpawnMutationConfigurable;
  Object.defineProperty(Player, 'Companion', {
    get: Player$Companion_getInstance
  });
  package$trustmatrix.Player = Player;
  package$trustmatrix.GamePosition = GamePosition;
  package$trustmatrix.Neighbourhood = Neighbourhood;
  package$trustmatrix.getShuffleComparator_eqzjk1$ = getShuffleComparator;
  Object.defineProperty(InitialDistribution, 'ALL_ALWAYS_COOPERATE', {
    get: InitialDistribution$ALL_ALWAYS_COOPERATE_getInstance
  });
  Object.defineProperty(InitialDistribution, 'ALL_ALWAYS_CHEAT', {
    get: InitialDistribution$ALL_ALWAYS_CHEAT_getInstance
  });
  package$trustmatrix.InitialDistribution = InitialDistribution;
  Object.defineProperty(TrustMatrix, 'defaults', {
    get: TrustMatrix$defaults_getInstance
  });
  package$trustmatrix.TrustMatrix = TrustMatrix;
  var package$platform = package$trustmatrix.platform || (package$trustmatrix.platform = {});
  package$platform.PlatformTools = PlatformTools;
  Object.defineProperty(Random, 'Companion', {
    get: Random$Companion_getInstance
  });
  package$platform.Random = Random;
  package$platform.Logger = Logger;
  package$platform.LoggerFactory = LoggerFactory;
  Object.defineProperty(LoggerBuilder, 'Companion', {
    get: LoggerBuilder$Companion_getInstance
  });
  package$platform.LoggerBuilder = LoggerBuilder;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  package$platform.Color = Color;
  Object.defineProperty(JsPlatformTools, 'Companion', {
    get: JsPlatformTools$Companion_getInstance
  });
  package$platform.JsPlatformTools = JsPlatformTools;
  package$platform.JsRandom = JsRandom;
  Object.defineProperty(LogLevels, 'TRACE', {
    get: LogLevels$TRACE_getInstance
  });
  Object.defineProperty(LogLevels, 'DEBUG', {
    get: LogLevels$DEBUG_getInstance
  });
  Object.defineProperty(LogLevels, 'INFO', {
    get: LogLevels$INFO_getInstance
  });
  Object.defineProperty(LogLevels, 'ERROR', {
    get: LogLevels$ERROR_getInstance
  });
  package$platform.LogLevels = LogLevels;
  package$platform.ConsoleAppender = ConsoleAppender;
  package$platform.JsConsoleLogger = JsConsoleLogger;
  Object.defineProperty(JsLoggerFactory, 'Companion', {
    get: JsLoggerFactory$Companion_getInstance
  });
  package$platform.JsLoggerFactory = JsLoggerFactory;
  Object.defineProperty(JsColors, 'BLACK', {
    get: JsColors$BLACK_getInstance
  });
  Object.defineProperty(JsColors, 'WHITE', {
    get: JsColors$WHITE_getInstance
  });
  Object.defineProperty(JsColors, 'GREEN', {
    get: JsColors$GREEN_getInstance
  });
  Object.defineProperty(JsColors, 'YELLOW', {
    get: JsColors$YELLOW_getInstance
  });
  Object.defineProperty(JsColors, 'BLUE', {
    get: JsColors$BLUE_getInstance
  });
  package$platform.JsColors = JsColors;
  Object.defineProperty(JsColor, 'Companion', {
    get: JsColor$Companion_getInstance
  });
  package$platform.JsColor = JsColor;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('trustmatrix-js_main', _);
  return _;
}));
