(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GetBias = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],2:[function(require,module,exports){
var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":1}],3:[function(require,module,exports){
var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":2}],4:[function(require,module,exports){
module.exports={"105":"i","192":"A","193":"A","194":"A","195":"A","196":"A","197":"A","199":"C","200":"E","201":"E","202":"E","203":"E","204":"I","205":"I","206":"I","207":"I","209":"N","210":"O","211":"O","212":"O","213":"O","214":"O","216":"O","217":"U","218":"U","219":"U","220":"U","221":"Y","224":"a","225":"a","226":"a","227":"a","228":"a","229":"a","231":"c","232":"e","233":"e","234":"e","235":"e","236":"i","237":"i","238":"i","239":"i","241":"n","242":"o","243":"o","244":"o","245":"o","246":"o","248":"o","249":"u","250":"u","251":"u","252":"u","253":"y","255":"y","256":"A","257":"a","258":"A","259":"a","260":"A","261":"a","262":"C","263":"c","264":"C","265":"c","266":"C","267":"c","268":"C","269":"c","270":"D","271":"d","272":"D","273":"d","274":"E","275":"e","276":"E","277":"e","278":"E","279":"e","280":"E","281":"e","282":"E","283":"e","284":"G","285":"g","286":"G","287":"g","288":"G","289":"g","290":"G","291":"g","292":"H","293":"h","294":"H","295":"h","296":"I","297":"i","298":"I","299":"i","300":"I","301":"i","302":"I","303":"i","304":"I","308":"J","309":"j","310":"K","311":"k","313":"L","314":"l","315":"L","316":"l","317":"L","318":"l","319":"L","320":"l","321":"L","322":"l","323":"N","324":"n","325":"N","326":"n","327":"N","328":"n","332":"O","333":"o","334":"O","335":"o","336":"O","337":"o","338":"O","339":"o","340":"R","341":"r","342":"R","343":"r","344":"R","345":"r","346":"S","347":"s","348":"S","349":"s","350":"S","351":"s","352":"S","353":"s","354":"T","355":"t","356":"T","357":"t","358":"T","359":"t","360":"U","361":"u","362":"U","363":"u","364":"U","365":"u","366":"U","367":"u","368":"U","369":"u","370":"U","371":"u","372":"W","373":"w","374":"Y","375":"y","376":"Y","377":"Z","378":"z","379":"Z","380":"z","381":"Z","382":"z","384":"b","385":"B","386":"B","387":"b","390":"O","391":"C","392":"c","393":"D","394":"D","395":"D","396":"d","398":"E","400":"E","401":"F","402":"f","403":"G","407":"I","408":"K","409":"k","410":"l","412":"M","413":"N","414":"n","415":"O","416":"O","417":"o","420":"P","421":"p","422":"R","427":"t","428":"T","429":"t","430":"T","431":"U","432":"u","434":"V","435":"Y","436":"y","437":"Z","438":"z","461":"A","462":"a","463":"I","464":"i","465":"O","466":"o","467":"U","468":"u","477":"e","484":"G","485":"g","486":"G","487":"g","488":"K","489":"k","490":"O","491":"o","500":"G","501":"g","504":"N","505":"n","512":"A","513":"a","514":"A","515":"a","516":"E","517":"e","518":"E","519":"e","520":"I","521":"i","522":"I","523":"i","524":"O","525":"o","526":"O","527":"o","528":"R","529":"r","530":"R","531":"r","532":"U","533":"u","534":"U","535":"u","536":"S","537":"s","538":"T","539":"t","542":"H","543":"h","544":"N","545":"d","548":"Z","549":"z","550":"A","551":"a","552":"E","553":"e","558":"O","559":"o","562":"Y","563":"y","564":"l","565":"n","566":"t","567":"j","570":"A","571":"C","572":"c","573":"L","574":"T","575":"s","576":"z","579":"B","580":"U","581":"V","582":"E","583":"e","584":"J","585":"j","586":"Q","587":"q","588":"R","589":"r","590":"Y","591":"y","592":"a","593":"a","595":"b","596":"o","597":"c","598":"d","599":"d","600":"e","603":"e","604":"e","605":"e","606":"e","607":"j","608":"g","609":"g","610":"g","613":"h","614":"h","616":"i","618":"i","619":"l","620":"l","621":"l","623":"m","624":"m","625":"m","626":"n","627":"n","628":"n","629":"o","633":"r","634":"r","635":"r","636":"r","637":"r","638":"r","639":"r","640":"r","641":"r","642":"s","647":"t","648":"t","649":"u","651":"v","652":"v","653":"w","654":"y","655":"y","656":"z","657":"z","663":"c","665":"b","666":"e","667":"g","668":"h","669":"j","670":"k","671":"l","672":"q","686":"h","688":"h","690":"j","691":"r","692":"r","694":"r","695":"w","696":"y","737":"l","738":"s","739":"x","780":"v","829":"x","851":"x","867":"a","868":"e","869":"i","870":"o","871":"u","872":"c","873":"d","874":"h","875":"m","876":"r","877":"t","878":"v","879":"x","7424":"a","7427":"b","7428":"c","7429":"d","7431":"e","7432":"e","7433":"i","7434":"j","7435":"k","7436":"l","7437":"m","7438":"n","7439":"o","7440":"o","7441":"o","7442":"o","7443":"o","7446":"o","7447":"o","7448":"p","7449":"r","7450":"r","7451":"t","7452":"u","7453":"u","7454":"u","7455":"m","7456":"v","7457":"w","7458":"z","7522":"i","7523":"r","7524":"u","7525":"v","7680":"A","7681":"a","7682":"B","7683":"b","7684":"B","7685":"b","7686":"B","7687":"b","7690":"D","7691":"d","7692":"D","7693":"d","7694":"D","7695":"d","7696":"D","7697":"d","7698":"D","7699":"d","7704":"E","7705":"e","7706":"E","7707":"e","7710":"F","7711":"f","7712":"G","7713":"g","7714":"H","7715":"h","7716":"H","7717":"h","7718":"H","7719":"h","7720":"H","7721":"h","7722":"H","7723":"h","7724":"I","7725":"i","7728":"K","7729":"k","7730":"K","7731":"k","7732":"K","7733":"k","7734":"L","7735":"l","7738":"L","7739":"l","7740":"L","7741":"l","7742":"M","7743":"m","7744":"M","7745":"m","7746":"M","7747":"m","7748":"N","7749":"n","7750":"N","7751":"n","7752":"N","7753":"n","7754":"N","7755":"n","7764":"P","7765":"p","7766":"P","7767":"p","7768":"R","7769":"r","7770":"R","7771":"r","7774":"R","7775":"r","7776":"S","7777":"s","7778":"S","7779":"s","7786":"T","7787":"t","7788":"T","7789":"t","7790":"T","7791":"t","7792":"T","7793":"t","7794":"U","7795":"u","7796":"U","7797":"u","7798":"U","7799":"u","7804":"V","7805":"v","7806":"V","7807":"v","7808":"W","7809":"w","7810":"W","7811":"w","7812":"W","7813":"w","7814":"W","7815":"w","7816":"W","7817":"w","7818":"X","7819":"x","7820":"X","7821":"x","7822":"Y","7823":"y","7824":"Z","7825":"z","7826":"Z","7827":"z","7828":"Z","7829":"z","7835":"s","7840":"A","7841":"a","7842":"A","7843":"a","7864":"E","7865":"e","7866":"E","7867":"e","7868":"E","7869":"e","7880":"I","7881":"i","7882":"I","7883":"i","7884":"O","7885":"o","7886":"O","7887":"o","7908":"U","7909":"u","7910":"U","7911":"u","7922":"Y","7923":"y","7924":"Y","7925":"y","7926":"Y","7927":"y","7928":"Y","7929":"y","8305":"i","8341":"h","8342":"k","8343":"l","8344":"m","8345":"n","8346":"p","8347":"s","8348":"t","8450":"c","8458":"g","8459":"h","8460":"h","8461":"h","8464":"i","8465":"i","8466":"l","8467":"l","8468":"l","8469":"n","8472":"p","8473":"p","8474":"q","8475":"r","8476":"r","8477":"r","8484":"z","8488":"z","8492":"b","8493":"c","8495":"e","8496":"e","8497":"f","8498":"F","8499":"m","8500":"o","8506":"q","8513":"g","8514":"l","8515":"l","8516":"y","8517":"d","8518":"d","8519":"e","8520":"i","8521":"j","8526":"f","8579":"C","8580":"c","8765":"s","8766":"s","8959":"z","8999":"x","9746":"x","9776":"i","9866":"i","10005":"x","10006":"x","10007":"x","10008":"x","10625":"z","10626":"z","11362":"L","11364":"R","11365":"a","11366":"t","11373":"A","11374":"M","11375":"A","11390":"S","11391":"Z","19904":"i","42893":"H","42922":"H","42923":"E","42924":"G","42925":"L","42928":"K","42929":"T","62937":"x"}
},{}],5:[function(require,module,exports){
(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(global, global.document);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(global, global.document);
  } else {
      global.normalize = factory(global, global.document);
  }
} (typeof window !== 'undefined' ? window : this, function (window, document) {
  var charmap = require('./charmap');
  var regex = null;
  var current_charmap;
  var old_charmap;

  function normalize(str, custom_charmap) {
    old_charmap = current_charmap;
    current_charmap = custom_charmap || charmap;

    regex = (regex && old_charmap === current_charmap) ? regex : buildRegExp(current_charmap);

    return str.replace(regex, function(charToReplace) {
      return current_charmap[charToReplace.charCodeAt(0)] || charToReplace;
    });
  }

  function buildRegExp(charmap){
     return new RegExp('[' + Object.keys(charmap).map(function(code) {return String.fromCharCode(code); }).join(' ') + ']', 'g');
   }

  return normalize;
}));

},{"./charmap":4}],6:[function(require,module,exports){
/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Title case a string.
   *
   * @param  {string} str
   * @return {string}
   */
  function toTitleCase (str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  }

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) {
      return token;
    }

    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) {
      return token.toUpperCase();
    }

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return toTitleCase(token);
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    collection
   * @return {string}
   */
  function sanitizeWord (token, word, collection) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = collection.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = collection[len];

      // If the rule passes, return the replacement.
      if (rule[0].test(word)) {
        return word.replace(rule[0], function (match, index, word) {
          var result = interpolate(rule[1], arguments);

          if (match === '') {
            return restoreCase(word[index - 1], result);
          }

          return restoreCase(match, result);
        });
      }
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word
   * @param  {number}  count
   * @param  {boolean} inclusive
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'advice',
    'adulthood',
    'agenda',
    'aid',
    'alcohol',
    'ammo',
    'athletics',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'commerce',
    'cod',
    'cooperation',
    'corps',
    'digestion',
    'debris',
    'diabetes',
    'energy',
    'equipment',
    'elk',
    'excretion',
    'expertise',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'trout',
    'traffic',
    'transporation',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /pox$/i, // "chickpox", "smallpox"
    /ois$/i,
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /sheep$/i,
    /measles$/i,
    /[^aeiou]ese$/i // "chinese", "japanese"
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});

},{}],7:[function(require,module,exports){
module.exports={"abandon":-2,"abandoned":-2,"abandons":-2,"abducted":-2,"abduction":-2,"abductions":-2,"abhor":-3,"abhorred":-3,"abhorrent":-3,"abhors":-3,"abilities":2,"ability":2,"aboard":1,"aborted":-1,"aborts":-1,"absentee":-1,"absentees":-1,"absolve":2,"absolved":2,"absolves":2,"absolving":2,"absorbed":1,"abuse":-3,"abused":-3,"abuses":-3,"abusing":-3,"abusive":-3,"accept":1,"acceptable":1,"acceptance":1,"accepted":1,"accepting":1,"accepts":1,"accessible":1,"accident":-2,"accidental":-2,"accidentally":-2,"accidents":-2,"acclaim":2,"acclaimed":2,"accolade":2,"accomplish":2,"accomplished":2,"accomplishes":2,"accomplishment":2,"accomplishments":2,"accusation":-2,"accusations":-2,"accuse":-2,"accused":-2,"accuses":-2,"accusing":-2,"ache":-2,"achievable":1,"aching":-2,"acquit":2,"acquits":2,"acquitted":2,"acquitting":2,"acrimonious":-3,"active":1,"adequate":1,"admire":3,"admired":3,"admires":3,"admiring":3,"admit":-1,"admits":-1,"admitted":-1,"admonish":-2,"admonished":-2,"adopt":1,"adopts":1,"adorable":3,"adoration":3,"adore":3,"adored":3,"adores":3,"adoring":3,"adoringly":3,"advanced":1,"advantage":2,"advantageous":2,"advantageously":2,"advantages":2,"adventure":2,"adventures":2,"adventurous":2,"adversary":-1,"advisable":1,"affected":-1,"affection":3,"affectionate":3,"affectionateness":3,"afflicted":-1,"affordable":2,"affronted":-1,"aficionados":2,"afraid":-2,"aggravate":-2,"aggravated":-2,"aggravates":-2,"aggravating":-2,"aggression":-2,"aggressions":-2,"aggressive":-2,"aggressiveness":-2,"aghast":-2,"agog":2,"agonise":-3,"agonised":-3,"agonises":-3,"agonising":-3,"agonize":-3,"agonized":-3,"agonizes":-3,"agonizing":-3,"agree":1,"agreeable":2,"agreed":1,"agreement":1,"agrees":1,"alarm":-2,"alarmed":-2,"alarmist":-2,"alarmists":-2,"alas":-1,"alert":-1,"alienation":-2,"alive":1,"allegation":-2,"allegations":-2,"allergic":-2,"allow":1,"ally":2,"alone":-2,"altruistic":2,"amaze":2,"amazed":2,"amazes":2,"amazing":4,"ambitious":2,"ambivalent":-1,"amicable":2,"amuse":3,"amused":3,"amusement":3,"amusements":3,"anger":-3,"angered":-3,"angers":-3,"angry":-3,"anguish":-3,"anguished":-3,"animosity":-2,"annoy":-2,"annoyance":-2,"annoyed":-2,"annoying":-2,"annoys":-2,"antagonistic":-2,"anti":-1,"anticipation":1,"anxiety":-2,"anxious":-2,"apathetic":-3,"apathy":-3,"apeshit":-3,"apocalyptic":-2,"apologise":-1,"apologised":-1,"apologises":-1,"apologising":-1,"apologize":-1,"apologized":-1,"apologizes":-1,"apologizing":-1,"apology":-1,"appalled":-2,"appalling":-2,"appealing":2,"appease":2,"appeased":2,"appeases":2,"appeasing":2,"applaud":2,"applauded":2,"applauding":2,"applauds":2,"applause":2,"appreciate":2,"appreciated":2,"appreciates":2,"appreciating":2,"appreciation":2,"apprehensive":-2,"appropriate":2,"appropriately":2,"approval":2,"approved":2,"approves":2,"ardent":1,"arrest":-2,"arrested":-3,"arrests":-2,"arrogant":-2,"arsehole":-4,"ashame":-2,"ashamed":-2,"ass":-4,"assassination":-3,"assassinations":-3,"assault":-2,"assaults":-2,"asset":2,"assets":2,"assfucking":-4,"asshole":-4,"astonished":2,"astound":3,"astounded":3,"astounding":3,"astoundingly":3,"astounds":3,"atrocious":-3,"atrocity":-3,"attack":-1,"attacked":-1,"attacking":-1,"attacks":-1,"attract":1,"attracted":1,"attracting":2,"attraction":2,"attractions":2,"attractive":2,"attractively":2,"attractiveness":2,"attracts":1,"audacious":3,"aura":1,"authority":1,"avenge":-2,"avenged":-2,"avenger":-2,"avengers":-2,"avenges":-2,"avenging":-2,"avert":-1,"averted":-1,"averts":-1,"avid":2,"avoid":-1,"avoided":-1,"avoids":-1,"await":-1,"awaited":-1,"awaits":-1,"award":3,"awarded":3,"awards":3,"awesome":4,"awful":-3,"awkward":-2,"axe":-1,"axed":-1,"backed":1,"backing":2,"backs":1,"bad":-3,"bad luck":-2,"badass":-3,"badly":-3,"badness":-3,"bailout":-2,"balanced":1,"bamboozle":-2,"bamboozled":-2,"bamboozles":-2,"ban":-2,"banish":-1,"bankrupt":-3,"bankruptcy":-3,"bankster":-3,"banned":-2,"barbarian":-2,"barbaric":-2,"barbarous":-2,"bargain":2,"barrier":-2,"bastard":-5,"bastards":-5,"battle":-1,"battled":-1,"battles":-1,"battling":-2,"beaten":-2,"beatific":3,"beating":-1,"beauties":3,"beautiful":3,"beautifully":3,"beautify":3,"beauty":3,"befit":2,"befitting":2,"belittle":-2,"belittled":-2,"beloved":3,"benefactor":2,"benefactors":2,"benefit":2,"benefits":2,"benefitted":2,"benefitting":2,"benevolent":3,"bereave":-2,"bereaved":-2,"bereaves":-2,"bereaving":-2,"best":3,"best damn":4,"betray":-3,"betrayal":-3,"betrayed":-3,"betraying":-3,"betrays":-3,"better":2,"bias":-1,"biased":-2,"big":1,"bitch":-5,"bitches":-5,"bitter":-2,"bitterest":-2,"bitterly":-2,"bizarre":-2,"blackmail":-3,"blackmailed":-3,"blackmailing":-3,"blackmails":-3,"blah":-2,"blame":-2,"blamed":-2,"blames":-2,"blaming":-2,"bless":2,"blesses":2,"blessing":3,"blessings":3,"blind":-1,"bliss":3,"blissful":3,"blithe":2,"bloated":-1,"block":-1,"blockade":-2,"blockbuster":3,"blocked":-1,"blocking":-1,"blocks":-1,"bloody":-3,"blurry":-2,"boastful":-2,"bold":2,"boldly":2,"bomb":-1,"boost":1,"boosted":1,"boosting":1,"boosts":1,"bore":-2,"bored":-2,"boring":-3,"bother":-2,"bothered":-2,"bothers":-2,"bothersome":-2,"boycott":-2,"boycotted":-2,"boycotting":-2,"boycotts":-2,"brainwashing":-3,"brave":2,"braveness":2,"bravery":2,"bravura":3,"breach":-2,"breached":-2,"breaches":-2,"breaching":-2,"breakthrough":3,"breathtaking":5,"bribe":-3,"bribed":-3,"bribes":-3,"bribing":-3,"bright":1,"brightest":2,"brightness":1,"brilliant":4,"brilliance":3,"brilliances":3,"brisk":2,"broke":-1,"broken":-1,"brooding":-2,"brutal":-3,"brutally":-3,"bullied":-2,"bullshit":-4,"bully":-2,"bullying":-2,"bummer":-2,"buoyant":2,"burden":-2,"burdened":-2,"burdening":-2,"burdens":-2,"burglar":-2,"burglary":-2,"calm":2,"calmed":2,"calming":2,"calms":2,"can't stand":-3,"cancel":-1,"cancelled":-1,"cancelling":-1,"cancels":-1,"cancer":-1,"capabilities":1,"capability":1,"capable":1,"captivated":3,"care":2,"carefree":1,"careful":2,"carefully":2,"carefulness":2,"careless":-2,"cares":2,"caring":2,"cashing in":-2,"casualty":-2,"catastrophe":-3,"catastrophic":-4,"cautious":-1,"celebrate":3,"celebrated":3,"celebrates":3,"celebrating":3,"celebration":3,"celebrations":3,"censor":-2,"censored":-2,"censors":-2,"certain":1,"chagrin":-2,"chagrined":-2,"challenge":-1,"champion":2,"championed":2,"champions":2,"chance":2,"chances":2,"chaos":-2,"chaotic":-2,"charged":-3,"charges":-2,"charisma":2,"charitable":2,"charm":3,"charming":3,"charmingly":3,"charmless":-3,"chastise":-3,"chastised":-3,"chastises":-3,"chastising":-3,"cheat":-3,"cheated":-3,"cheater":-3,"cheaters":-3,"cheating":-3,"cheats":-3,"cheer":2,"cheered":2,"cheerful":2,"cheerfully":2,"cheering":2,"cheerless":-2,"cheers":2,"cheery":3,"cherish":2,"cherished":2,"cherishes":2,"cherishing":2,"chic":2,"chide":-3,"chided":-3,"chides":-3,"chiding":-3,"childish":-2,"chilling":-1,"choke":-2,"choked":-2,"chokes":-2,"choking":-2,"clarifies":2,"clarity":2,"clash":-2,"classy":3,"clean":2,"cleaner":2,"clear":1,"cleared":1,"clearly":1,"clears":1,"clever":2,"clouded":-1,"clueless":-2,"cock":-5,"cocksucker":-5,"cocksuckers":-5,"cocky":-2,"coerced":-2,"coercion":-2,"collapse":-2,"collapsed":-2,"collapses":-2,"collapsing":-2,"collide":-1,"collides":-1,"colliding":-1,"collision":-2,"collisions":-2,"colluding":-3,"combat":-1,"combats":-1,"comedy":1,"comfort":2,"comfortable":2,"comfortably":2,"comforting":2,"comforts":2,"comic":1,"commend":2,"commended":2,"commit":1,"commitment":2,"commits":1,"committed":1,"committing":1,"compassion":2,"compassionate":2,"compelled":1,"competencies":1,"competent":2,"competitive":2,"complacent":-2,"complain":-2,"complained":-2,"complaining":-2,"complains":-2,"complaint":-2,"complaints":-2,"complicating":-2,"compliment":2,"complimented":2,"compliments":2,"comprehensive":2,"concerned":-2,"conciliate":2,"conciliated":2,"conciliates":2,"conciliating":2,"condemn":-2,"condemnation":-2,"condemned":-2,"condemns":-2,"confidence":2,"confident":2,"confidently":2,"conflict":-2,"conflicting":-2,"conflictive":-2,"conflicts":-2,"confuse":-2,"confused":-2,"confusing":-2,"congrats":2,"congratulate":2,"congratulation":2,"congratulations":2,"consent":2,"consents":2,"consolable":2,"conspiracy":-3,"constipation":-2,"constrained":-2,"contagion":-2,"contagions":-2,"contagious":-1,"contaminant":-2,"contaminants":-2,"contaminate":-2,"contaminated":-2,"contaminates":-2,"contaminating":-2,"contamination":-2,"contaminations":-2,"contempt":-2,"contemptible":-2,"contemptuous":-2,"contemptuously":-2,"contend":-1,"contender":-1,"contending":-1,"contentious":-2,"contestable":-2,"controversial":-2,"controversially":-2,"controversies":-2,"controversy":-2,"convicted":-2,"convince":1,"convinced":1,"convinces":1,"convivial":2,"cool":1,"cool stuff":3,"cornered":-2,"corpse":-1,"corrupt":-3,"corrupted":-3,"corrupting":-3,"corruption":-3,"corrupts":-3,"costly":-2,"courage":2,"courageous":2,"courageously":2,"courageousness":2,"courteous":2,"courtesy":2,"cover-up":-3,"coward":-2,"cowardly":-2,"coziness":2,"cramp":-1,"crap":-3,"crappy":-3,"crash":-2,"crazier":-2,"craziest":-2,"crazy":-2,"creative":2,"crestfallen":-2,"cried":-2,"cries":-2,"crime":-3,"crimes":-3,"criminal":-3,"criminals":-3,"criminate":-3,"criminated":-3,"criminates":-3,"crisis":-3,"critic":-2,"criticise":-2,"criticised":-2,"criticises":-2,"criticising":-2,"criticism":-2,"criticize":-2,"criticized":-2,"criticizes":-2,"criticizing":-2,"critics":-2,"critique":-2,"crowding":-1,"crude":-1,"cruel":-3,"cruelty":-3,"crush":-1,"crushed":-2,"crushes":-1,"crushing":-1,"cry":-1,"crying":-2,"cunning":2,"cunt":-5,"curious":1,"curse":-1,"cut":-1,"cutback":-2,"cutbacks":-2,"cute":2,"cuts":-1,"cutting":-1,"cynic":-2,"cynical":-2,"cynicism":-2,"damage":-3,"damaged":-3,"damages":-3,"damaging":-3,"damn":-2,"damn cute":3,"damn good":4,"damned":-4,"damnit":-4,"danger":-2,"dangerous":-2,"dangerously":-2,"daredevil":2,"daring":2,"darkest":-2,"darkness":-1,"dauntless":2,"dazzling":3,"dead":-3,"deadening":-2,"deadlock":-2,"deadly":-3,"deafening":-1,"dear":2,"dearly":3,"death":-2,"deaths":-2,"debonair":2,"debt":-2,"deceit":-3,"deceitful":-3,"deceive":-3,"deceived":-3,"deceives":-3,"deceiving":-3,"deception":-3,"deceptive":-3,"decisive":1,"dedicated":2,"dedication":2,"defeat":-2,"defeated":-2,"defect":-3,"defective":-3,"defects":-3,"defender":2,"defenders":2,"defenseless":-2,"defer":-1,"deferring":-1,"defiant":-1,"deficient":-2,"deficiency":-2,"deficiencies":-2,"deficit":-2,"deformed":-2,"deformities":-2,"deformity":-2,"defraud":-3,"defrauds":-3,"deft":2,"defunct":-2,"degrade":-2,"degraded":-2,"degrades":-2,"dehumanize":-2,"dehumanized":-2,"dehumanizes":-2,"dehumanizing":-2,"deject":-2,"dejected":-2,"dejecting":-2,"dejects":-2,"delay":-1,"delayed":-1,"delectable":3,"delicious":3,"delight":3,"delighted":3,"delightful":3,"delightfully":3,"delighting":3,"delights":3,"demand":-1,"demanded":-1,"demanding":-1,"demands":-1,"demonstration":-1,"demoralize":-2,"demoralized":-2,"demoralizes":-2,"demoralizing":-2,"denial":-2,"denials":-2,"denied":-2,"denier":-2,"deniers":-2,"denies":-2,"denounce":-2,"denounces":-2,"dent":-2,"deny":-2,"denying":-2,"deplore":-3,"deplored":-3,"deplores":-3,"deploring":-3,"deport":-2,"deported":-2,"deporting":-2,"deports":-2,"deportation":-2,"deportations":-2,"depressed":-2,"depressing":-2,"deprivation":-3,"derail":-2,"derailed":-2,"derails":-2,"derelict":-2,"deride":-2,"derided":-2,"derides":-2,"deriding":-2,"derision":-2,"desirable":2,"desire":1,"desired":2,"desirous":2,"despair":-3,"despairing":-3,"despairs":-3,"desperate":-3,"desperately":-3,"despondent":-3,"destroy":-3,"destroyed":-3,"destroying":-3,"destroys":-3,"destruction":-3,"destructive":-3,"detached":-1,"detain":-2,"detained":-2,"detention":-2,"deteriorate":-2,"deteriorated":-2,"deteriorates":-2,"deteriorating":-2,"determined":2,"deterrent":-2,"detract":-1,"detracted":-1,"detracts":-1,"devastate":-2,"devastated":-2,"devastating":-2,"devastation":-2,"devastations":-2,"devoted":3,"devotion":2,"devotional":2,"diamond":1,"dick":-4,"dickhead":-4,"die":-3,"died":-3,"difficult":-1,"diffident":-2,"dignity":2,"dilemma":-1,"dilligence":2,"dipshit":-3,"dire":-3,"direful":-3,"dirt":-2,"dirtier":-2,"dirtiest":-2,"dirty":-2,"disabilities":-2,"disability":-2,"disabling":-1,"disadvantage":-2,"disadvantaged":-2,"disagree":-2,"disagreeable":-2,"disagreement":-2,"disappear":-1,"disappeared":-1,"disappears":-1,"disappoint":-2,"disappointed":-2,"disappointing":-2,"disappointment":-2,"disappointments":-2,"disappoints":-2,"disapproval":-2,"disapprovals":-2,"disapprove":-2,"disapproved":-2,"disapproves":-2,"disapproving":-2,"disaster":-2,"disasters":-2,"disastrous":-3,"disbelieve":-2,"discard":-1,"discarded":-1,"discarding":-1,"discards":-1,"discernment":2,"discomfort":-2,"disconsolate":-2,"disconsolation":-2,"discontented":-2,"discord":-2,"discounted":-1,"discouraged":-2,"discredited":-2,"discriminate":-2,"discriminated":-2,"discriminates":-2,"discriminating":-2,"discriminatory":-2,"disdain":-2,"disease":-1,"diseases":-1,"disgrace":-2,"disgraced":-2,"disguise":-1,"disguised":-1,"disguises":-1,"disguising":-1,"disgust":-3,"disgusted":-3,"disgustful":-3,"disgusting":-3,"disheartened":-2,"dishonest":-2,"disillusioned":-2,"disinclined":-2,"disjointed":-2,"dislike":-2,"disliked":-2,"dislikes":-2,"dismal":-2,"dismayed":-2,"dismissed":-2,"disorder":-2,"disorders":-2,"disorganized":-2,"disoriented":-2,"disparage":-2,"disparaged":-2,"disparages":-2,"disparaging":-2,"displeased":-2,"displeasure":-2,"disproportionate":-2,"dispute":-2,"disputed":-2,"disputes":-2,"disputing":-2,"disqualified":-2,"disquiet":-2,"disregard":-2,"disregarded":-2,"disregarding":-2,"disregards":-2,"disrespect":-2,"disrespected":-2,"disrupt":-2,"disrupted":-2,"disrupting":-2,"disruption":-2,"disruptions":-2,"disruptive":-2,"disrupts":-2,"dissatisfied":-2,"distasteful":-2,"distinguished":2,"distort":-2,"distorted":-2,"distorting":-2,"distorts":-2,"distract":-2,"distracted":-2,"distraction":-2,"distracts":-2,"distress":-2,"distressed":-2,"distresses":-2,"distressing":-2,"distrust":-3,"distrustful":-3,"disturb":-2,"disturbed":-2,"disturbing":-2,"disturbs":-2,"dithering":-2,"diverting":-1,"dizzy":-1,"dodging":-2,"dodgy":-2,"does not work":-3,"dolorous":-2,"donate":2,"donated":2,"donates":2,"donating":2,"donation":2,"dont like":-2,"doom":-2,"doomed":-2,"doubt":-1,"doubted":-1,"doubtful":-1,"doubting":-1,"doubts":-1,"douche":-3,"douchebag":-3,"dour":-2,"downcast":-2,"downer":-2,"downhearted":-2,"downside":-2,"drag":-1,"dragged":-1,"drags":-1,"drained":-2,"dread":-2,"dreaded":-2,"dreadful":-3,"dreading":-2,"dream":1,"dreams":1,"dreary":-2,"droopy":-2,"drop":-1,"dropped":-1,"drown":-2,"drowned":-2,"drowns":-2,"drudgery":-2,"drunk":-2,"dubious":-2,"dud":-2,"dull":-2,"dumb":-3,"dumbass":-3,"dump":-1,"dumped":-2,"dumps":-1,"dupe":-2,"duped":-2,"dupery":-2,"durable":2,"dying":-3,"dysfunction":-2,"eager":2,"earnest":2,"ease":2,"easy":1,"ecstatic":4,"eerie":-2,"eery":-2,"effective":2,"effectively":2,"effectiveness":2,"effortlessly":2,"elated":3,"elation":3,"elegant":2,"elegantly":2,"embarrass":-2,"embarrassed":-2,"embarrasses":-2,"embarrassing":-2,"embarrassment":-2,"embezzlement":-3,"embittered":-2,"embrace":1,"emergency":-2,"empathetic":2,"empower":2,"empowerment":2,"emptiness":-1,"empty":-1,"enchanted":2,"encourage":2,"encouraged":2,"encouragement":2,"encourages":2,"encouraging":2,"endorse":2,"endorsed":2,"endorsement":2,"endorses":2,"enemies":-2,"enemy":-2,"energetic":2,"engage":1,"engages":1,"engrossed":1,"engrossing":3,"enjoy":2,"enjoyable":2,"enjoyed":2,"enjoying":2,"enjoys":2,"enlighten":2,"enlightened":2,"enlightening":2,"enlightens":2,"ennui":-2,"enrage":-2,"enraged":-2,"enrages":-2,"enraging":-2,"enrapture":3,"enslave":-2,"enslaved":-2,"enslaves":-2,"ensure":1,"ensuring":1,"enterprising":1,"entertaining":2,"enthral":3,"enthusiastic":3,"entitled":1,"entrusted":2,"envies":-1,"envious":-2,"environment-friendly":2,"envy":-1,"envying":-1,"erroneous":-2,"error":-2,"errors":-2,"escape":-1,"escapes":-1,"escaping":-1,"esteem":2,"esteemed":2,"ethical":2,"euphoria":3,"euphoric":4,"evacuate":-1,"evacuated":-1,"evacuates":-1,"evacuating":-1,"evacuation":-1,"evergreen":2,"evergreens":2,"evergreening":-3,"eviction":-1,"evil":-3,"exacerbate":-2,"exacerbated":-2,"exacerbates":-2,"exacerbating":-2,"exaggerate":-2,"exaggerated":-2,"exaggerates":-2,"exaggerating":-2,"exasparate":-2,"exasperated":-2,"exasperates":-2,"exasperating":-2,"excellence":3,"excellent":3,"excite":3,"excited":3,"excitement":3,"exciting":3,"exclude":-1,"excluded":-2,"exclusion":-1,"exclusive":2,"excruciatingly":-1,"excuse":-1,"exempt":-1,"exhausted":-2,"exhilarated":3,"exhilarates":3,"exhilarating":3,"exonerate":2,"exonerated":2,"exonerates":2,"exonerating":2,"expand":1,"expands":1,"expel":-2,"expelled":-2,"expelling":-2,"expels":-2,"expertly":2,"exploit":-2,"exploited":-2,"exploiting":-2,"exploits":-2,"exploration":1,"explorations":1,"expose":-1,"exposed":-1,"exposes":-1,"exposing":-1,"exquisite":3,"extend":1,"extends":1,"extremist":-2,"extremists":-2,"exuberant":4,"exultant":3,"exultantly":3,"fabulous":4,"fabulously":4,"fad":-2,"fag":-3,"faggot":-3,"faggots":-3,"fail":-2,"failed":-2,"failing":-2,"fails":-2,"failure":-2,"failures":-2,"fainthearted":-2,"fair":2,"fairness":2,"faith":1,"faithful":3,"fake":-3,"faker":-3,"fakes":-3,"faking":-3,"fallen":-2,"falling":-1,"false":-1,"falsely":-2,"falsified":-3,"falsify":-3,"fame":1,"famine":-2,"famous":2,"fan":3,"fantastic":4,"farce":-1,"fascinate":3,"fascinated":3,"fascinates":3,"fascinating":3,"fascination":3,"fascist":-2,"fascists":-2,"fatal":-3,"fatalities":-3,"fatality":-3,"fatigue":-2,"fatigued":-2,"fatigues":-2,"fatiguing":-2,"favor":2,"favorable":2,"favorably":2,"favored":2,"favorite":2,"favorited":2,"favorites":2,"favors":2,"favour":2,"favourable":2,"favourably":2,"favoured":2,"favourite":2,"favourited":2,"favourites":2,"favours":2,"fear":-2,"fearful":-2,"fearfully":-2,"fearing":-2,"fearless":2,"fearlessness":2,"fearsome":-2,"fed up":-3,"feeble":-2,"feeling":1,"felonies":-3,"felony":-3,"fertile":2,"fervent":2,"fervid":2,"festive":2,"fever":-2,"fiasco":-3,"fidgety":-2,"fight":-1,"fighting":-2,"fine":2,"fines":-2,"finest":3,"fire":-2,"fired":-2,"firing":-2,"fit":1,"fitness":1,"filth":-2,"filthy":-2,"flagship":2,"flaw":-2,"flawed":-3,"flawless":2,"flawlessly":2,"flaws":-2,"flees":-1,"flop":-2,"flops":-2,"flu":-2,"flustered":-2,"focused":2,"fond":2,"fondness":2,"fool":-2,"foolish":-2,"fools":-2,"forbid":-1,"forbidden":-2,"forbidding":-2,"forced":-1,"foreclosure":-2,"foreclosures":-2,"forefront":1,"forget":-1,"forgetful":-2,"forgettable":-1,"forgive":1,"forgiving":1,"forgot":-1,"forgotten":-1,"fortune":2,"fortunate":2,"fortunately":2,"foul":-3,"frantic":-1,"fraud":-4,"frauds":-4,"fraudster":-4,"fraudsters":-4,"fraudulence":-4,"fraudulent":-4,"freak":-2,"free":1,"freedom":2,"freedoms":2,"frenzy":-3,"fresh":1,"friend":1,"friendliness":2,"friendly":2,"friendship":2,"fright":-2,"frightened":-2,"frightening":-3,"frikin":-2,"frisky":2,"frowning":-1,"fruitless":-2,"frustrate":-2,"frustrated":-2,"frustrates":-2,"frustrating":-2,"frustration":-2,"ftw":3,"fuck":-4,"fucked":-4,"fucker":-4,"fuckers":-4,"fuckface":-4,"fuckhead":-4,"fuckin":-4,"fucking":-4,"fucking amazing":4,"fucking beautiful":4,"fucking cute":4,"fucking fantastic":4,"fucking good":4,"fucking great":4,"fucking hot":2,"fucking love":4,"fucking loves":4,"fucking perfect":4,"fucktard":-4,"fud":-3,"fuked":-4,"fuking":-4,"fulfill":2,"fulfilled":2,"fulfillment":2,"fulfills":2,"fuming":-2,"fun":4,"funeral":-1,"funerals":-1,"funky":2,"funnier":4,"funny":4,"furious":-3,"futile":-2,"gag":-2,"gagged":-2,"gain":2,"gained":2,"gaining":2,"gains":2,"gallant":3,"gallantly":3,"gallantry":3,"game-changing":3,"garbage":-1,"gem":3,"generous":2,"generously":2,"genial":3,"ghastly":-2,"ghost":-1,"giddy":-2,"gift":2,"glad":3,"glamorous":3,"glamourous":3,"glee":3,"gleeful":3,"gloom":-1,"gloomy":-2,"glorious":2,"glory":2,"glum":-2,"god":1,"goddamn":-3,"godsend":4,"gold":2,"good":3,"goodlooking":3,"goodmorning":1,"goodness":3,"goodwill":3,"goofiness":-2,"goofy":-2,"grace":1,"graceful":2,"gracious":3,"grand":3,"grant":1,"granted":1,"granting":1,"grants":1,"grateful":3,"gratification":2,"grave":-2,"gray":-1,"grisly":-2,"gr8":3,"great":3,"greater":3,"greatest":3,"greed":-3,"greedy":-2,"green wash":-3,"green washing":-3,"greenwash":-3,"greenwasher":-3,"greenwashers":-3,"greenwashing":-3,"greet":1,"greeted":1,"greeting":1,"greetings":2,"greets":1,"grey":-1,"grief":-2,"grieved":-2,"grim":-2,"gripping":2,"groan":-2,"groaned":-2,"groaning":-2,"groans":-2,"gross":-2,"growing":1,"growth":2,"growths":2,"gruesome":-3,"guarantee":1,"guilt":-3,"guilty":-3,"gullibility":-2,"gullible":-2,"gun":-1,"ha":2,"hacked":-1,"haha":3,"hahaha":3,"hahahah":3,"hail":2,"hailed":2,"hallelujah":3,"handpicked":1,"handsome":3,"hapless":-2,"haplessness":-2,"happiest":3,"happiness":3,"happy":3,"harass":-3,"harassed":-3,"harasses":-3,"harassing":-3,"harassment":-3,"hard":-1,"hardier":2,"hardship":-2,"hardy":2,"harm":-2,"harmed":-2,"harmful":-2,"harming":-2,"harmony":2,"harmonious":2,"harmoniously":2,"harms":-2,"harried":-2,"harsh":-2,"harsher":-2,"harshest":-2,"harshly":-2,"hate":-3,"hated":-3,"hater":-3,"haters":-3,"hates":-3,"hating":-3,"hatred":-3,"haunt":-1,"haunted":-2,"haunting":1,"haunts":-1,"havoc":-2,"hazardous":-3,"headache":-2,"healthy":2,"heartbreaking":-3,"heartbroken":-3,"heartfelt":3,"heartless":-2,"heartwarming":3,"heaven":2,"heavenly":4,"heavyhearted":-2,"hehe":2,"hell":-4,"hellish":-2,"help":2,"helpful":2,"helping":2,"helpless":-2,"helps":2,"hero":2,"heroes":2,"heroic":3,"hesitant":-2,"hesitate":-2,"hid":-1,"hide":-1,"hideous":-3,"hides":-1,"hiding":-1,"highlight":2,"hilarious":2,"hinder":-2,"hindrance":-2,"hoax":-2,"hollow":-1,"homeless":-2,"homesick":-2,"homicide":-2,"homicides":-2,"honest":2,"honor":2,"honored":2,"honoring":2,"honour":2,"honoured":2,"honouring":2,"hooligan":-2,"hooliganism":-2,"hooligans":-2,"hope":2,"hopeful":2,"hopefully":2,"hopeless":-2,"hopelessness":-2,"hopes":2,"hoping":2,"horrendous":-3,"horrid":-3,"horrible":-3,"horrific":-3,"horrified":-3,"hospitalized":-2,"hostile":-2,"huckster":-2,"hug":2,"huge":1,"hugs":2,"humane":2,"humble":1,"humbug":-2,"humerous":3,"humiliated":-3,"humiliation":-3,"humor":2,"humorous":2,"humour":2,"humourous":2,"hunger":-2,"hurrah":5,"hurt":-2,"hurting":-2,"hurts":-2,"hypocritical":-2,"hysteria":-3,"hysterical":-3,"hysterics":-3,"icky":-3,"idiocy":-3,"idiot":-3,"idiotic":-3,"ignorance":-2,"ignorant":-2,"ignore":-1,"ignored":-2,"ignores":-1,"ill":-2,"ill-fated":-2,"illegal":-3,"illegally":-3,"illegitimate":-3,"illiteracy":-2,"illness":-2,"illnesses":-2,"illogical":-2,"imaginative":2,"imbecile":-3,"immobilized":-1,"immortal":2,"immune":1,"impair":-2,"impaired":-2,"impairing":-2,"impairment":-2,"impairs":-2,"impatient":-2,"impeachment":-3,"impeachments":-3,"impede":-2,"impeded":-2,"impedes":-2,"impeding":-2,"impedingly":-2,"imperfect":-2,"importance":2,"important":2,"impose":-1,"imposed":-1,"imposes":-1,"imposing":-1,"imposter":-2,"impotent":-2,"impress":3,"impressed":3,"impresses":3,"impressive":3,"imprisoned":-2,"imprisonment":-2,"improper":-2,"improperly":-2,"improve":2,"improved":2,"improvement":2,"improves":2,"improving":2,"inability":-2,"inaction":-2,"inadequate":-2,"inadvertently":-2,"inappropriate":-2,"incapable":-2,"incapacitated":-2,"incapacitates":-2,"incapacitating":-2,"incense":-2,"incensed":-2,"incenses":-2,"incensing":-2,"incoherent":-2,"incompetence":-2,"incompetent":-2,"incomplete":-1,"incomprehensible":-2,"inconsiderate":-2,"inconvenience":-2,"inconvenient":-2,"increase":1,"increased":1,"indecisive":-2,"indestructible":2,"indicted":-2,"indifference":-2,"indifferent":-2,"indignant":-2,"indignation":-2,"indoctrinate":-2,"indoctrinated":-2,"indoctrinates":-2,"indoctrinating":-2,"inediable":-2,"inexorable":-3,"inexcusable":-3,"ineffective":-2,"ineffectively":-2,"ineffectual":-2,"inefficiency":-2,"inefficient":-2,"inefficiently":-2,"inept":-2,"ineptitude":-2,"infantile":-2,"infantilized":-2,"infatuated":2,"infatuation":2,"infect":-2,"infected":-2,"infecting":-2,"infection":-2,"infections":-2,"infectious":-2,"infects":-2,"inferior":-2,"infest":-2,"infested":-2,"infesting":-2,"infests":-2,"inflamed":-2,"inflict":-2,"inflicted":-2,"inflicting":-2,"inflicts":-2,"influential":2,"infract":-2,"infracted":-2,"infracting":-2,"infracts":-2,"infringement":-2,"infuriate":-2,"infuriated":-2,"infuriates":-2,"infuriating":-2,"inhibit":-1,"inhuman":-2,"injured":-2,"injuries":-2,"injury":-2,"injustice":-2,"innovate":1,"innovates":1,"innovation":1,"innovative":2,"inoperative":-2,"inquisition":-2,"inquisitive":2,"insane":-2,"insanity":-2,"insecure":-2,"insensitive":-2,"insensitivity":-2,"insignificant":-2,"insipid":-2,"insolvent":-2,"insomnia":-2,"inspiration":2,"inspirational":2,"inspire":2,"inspired":2,"inspires":2,"inspiring":3,"insufficiency":-2,"insufficient":-2,"insufficiently":-2,"insult":-2,"insulted":-2,"insulting":-2,"insults":-2,"intact":2,"integrity":2,"intelligent":2,"intense":1,"interest":1,"interested":2,"interesting":2,"interests":1,"interrogated":-2,"interrupt":-2,"interrupted":-2,"interrupting":-2,"interruption":-2,"interrupts":-2,"intimacy":2,"intimidate":-2,"intimidated":-2,"intimidates":-2,"intimidating":-2,"intimidation":-2,"intransigence":-2,"intransigency":-2,"intricate":2,"intrigues":1,"invasion":-1,"invincible":2,"invite":1,"inviting":1,"invulnerable":2,"irate":-3,"ironic":-1,"irony":-1,"irrational":-1,"irreparable":-2,"irreproducible":-2,"irresistible":2,"irresistibly":2,"irresolute":-2,"irresponsible":-2,"irresponsibly":-2,"irreversible":-1,"irreversibly":-1,"irritate":-3,"irritated":-3,"irritates":-3,"irritating":-3,"isolated":-1,"itchy":-2,"jackass":-4,"jackasses":-4,"jailed":-2,"jaunty":2,"jealous":-2,"jealousy":-2,"jeopardy":-2,"jerk":-3,"jesus":1,"jewel":1,"jewels":1,"jocular":2,"join":1,"joke":2,"jokes":2,"jolly":2,"jovial":2,"joy":3,"joyful":3,"joyfully":3,"joyless":-2,"joyous":3,"jubilant":3,"jumpy":-1,"justice":2,"justifiably":2,"justified":2,"keen":1,"kickback":-3,"kickbacks":-3,"kidnap":-2,"kidnapped":-2,"kidnapping":-2,"kidnappings":-2,"kidnaps":-2,"kill":-3,"killed":-3,"killing":-3,"kills":-3,"kind":2,"kind of":0,"kinder":2,"kindness":2,"kiss":2,"kudos":3,"lack":-2,"lackadaisical":-2,"lag":-1,"lagged":-2,"lagging":-2,"lags":-2,"lame":-2,"landmark":2,"lapse":-1,"lapsed":-1,"laugh":1,"laughed":1,"laughing":1,"laughs":1,"laughting":1,"launched":1,"lawl":3,"lawsuit":-2,"lawsuits":-2,"lazy":-1,"leadership":1,"leading":2,"leak":-1,"leaked":-1,"leave":-1,"legal":1,"legally":1,"lenient":1,"lethal":-2,"lethality":-2,"lethargic":-2,"lethargy":-2,"liar":-3,"liars":-3,"libelous":-2,"lied":-2,"lifeless":-1,"lifesaver":4,"lighthearted":1,"likable":2,"like":2,"likeable":2,"liked":2,"likers":2,"likes":2,"liking":2,"limitation":-1,"limited":-1,"limits":-1,"litigation":-1,"litigious":-2,"lively":2,"livid":-2,"lmao":4,"lmfao":4,"loathe":-3,"loathed":-3,"loathes":-3,"loathing":-3,"loathsome":-3,"lobbied":-2,"lobby":-2,"lobbying":-2,"lobbyist":-2,"lobbyists":-2,"lol":3,"lolol":4,"lololol":4,"lolololol":4,"lonely":-2,"lonesome":-2,"longing":-1,"lool":3,"loom":-1,"loomed":-1,"looming":-1,"looms":-1,"loool":3,"looool":3,"loose":-3,"looses":-3,"loser":-3,"losing":-3,"loss":-3,"losses":-3,"lost":-3,"lousy":-2,"lovable":3,"love":3,"loved":3,"lovelies":3,"lovely":3,"loves":3,"loving":2,"loving-kindness":3,"lowest":-1,"loyal":3,"loyalty":3,"luck":3,"luckily":3,"lucky":3,"lucrative":3,"ludicrous":-3,"lugubrious":-2,"lunatic":-3,"lunatics":-3,"lurk":-1,"lurking":-1,"lurks":-1,"luxury":2,"macabre":-2,"mad":-3,"maddening":-3,"made-up":-1,"madly":-3,"madness":-3,"magnificent":3,"maladaption":-2,"maldevelopment":-2,"maltreatment":-2,"mandatory":-1,"manipulated":-1,"manipulating":-1,"manipulation":-1,"manslaughter":-3,"marvel":3,"marvelous":3,"marvels":3,"masterpiece":4,"masterpieces":4,"matter":1,"matters":1,"mature":2,"meaningful":2,"meaningless":-2,"medal":3,"mediocrity":-3,"meditative":1,"melancholy":-2,"memorable":1,"memoriam":-2,"menace":-2,"menaced":-2,"menaces":-2,"mercy":2,"merry":3,"mesmerizing":3,"mess":-2,"messed":-2,"messing up":-2,"methodical":2,"methodically":2,"mindless":-2,"miracle":4,"mirth":3,"mirthful":3,"mirthfully":3,"misbehave":-2,"misbehaved":-2,"misbehaves":-2,"misbehaving":-2,"misbranding":-3,"miscast":-2,"mischief":-1,"mischiefs":-1,"misclassified":-2,"misclassifies":-2,"misclassify":-2,"misconduct":-2,"misconducted":-2,"misconducting":-2,"misconducts":-2,"miserable":-3,"miserably":-3,"misery":-2,"misfire":-2,"misfortune":-2,"misgiving":-2,"misinformation":-2,"misinformed":-2,"misinterpreted":-2,"mislead":-3,"misleaded":-3,"misleading":-3,"misleads":-3,"misplace":-2,"misplaced":-2,"misplaces":-2,"misplacing":-2,"mispricing":-3,"misread":-1,"misreport":-2,"misreported":-2,"misreporting":-2,"misreports":-2,"misrepresent":-2,"misrepresentation":-2,"misrepresentations":-2,"misrepresented":-2,"misrepresenting":-2,"misrepresents":-2,"miss":-2,"missed":-2,"missing":-2,"mistake":-2,"mistaken":-2,"mistakes":-2,"mistaking":-2,"misunderstand":-2,"misunderstanding":-2,"misunderstands":-2,"misunderstood":-2,"misuse":-2,"misused":-2,"misuses":-2,"misusing":-2,"moan":-2,"moaned":-2,"moaning":-2,"moans":-2,"mock":-2,"mocked":-2,"mocking":-2,"mocks":-2,"modernize":2,"modernized":2,"modernizes":2,"modernizing":2,"mongering":-2,"monopolize":-2,"monopolized":-2,"monopolizes":-2,"monopolizing":-2,"monotone":-1,"moody":-1,"mope":-1,"moping":-1,"moron":-3,"motherfucker":-5,"motherfucking":-5,"motivate":1,"motivated":2,"motivating":2,"motivation":1,"mourn":-2,"mourned":-2,"mournful":-2,"mourning":-2,"mourns":-2,"muddy":-2,"mumpish":-2,"murder":-2,"murderer":-2,"murdering":-3,"murderous":-3,"murders":-2,"murky":-2,"myth":-1,"n00b":-2,"naive":-2,"narcissism":-2,"nasty":-3,"natural":1,"naïve":-2,"needy":-2,"negative":-2,"negativity":-2,"neglect":-2,"neglected":-2,"neglecting":-2,"neglects":-2,"nerves":-1,"nervous":-2,"nervously":-2,"nice":3,"nifty":2,"niggas":-5,"nigger":-5,"no":-1,"no fun":-3,"noble":2,"noblest":2,"noisy":-1,"non-approved":-2,"nonsense":-2,"noob":-2,"nosey":-2,"not good":-2,"not working":-3,"notable":2,"noticeable":2,"notorious":-2,"novel":2,"numb":-1,"nurturing":2,"nuts":-3,"obliterate":-2,"obliterated":-2,"obnoxious":-3,"obscene":-2,"obscenity":-2,"obsessed":2,"obsolete":-2,"obstacle":-2,"obstacles":-2,"obstinate":-2,"obstruct":-2,"obstructed":-2,"obstructing":-2,"obstruction":-2,"obstructs":-2,"odd":-2,"offence":-2,"offences":-2,"offend":-2,"offended":-2,"offender":-2,"offending":-2,"offends":-2,"offense":-2,"offenses":-2,"offensive":-2,"offensively":-2,"offline":-1,"oks":2,"ominous":3,"once-in-a-lifetime":3,"oops":-2,"opportunities":2,"opportunity":2,"oppressed":-2,"oppression":-2,"oppressions":-2,"oppressive":-2,"optimism":2,"optimistic":2,"optionless":-2,"ostracize":-2,"ostracized":-2,"ostracizes":-2,"ouch":-2,"outage":-2,"outages":-2,"outbreak":-2,"outbreaks":-2,"outcry":-2,"outmaneuvered":-2,"outnumbered":-2,"outrage":-3,"outraged":-3,"outrageous":-3,"outreach":2,"outstanding":5,"overjoyed":4,"overload":-1,"overlooked":-1,"overprotective":-2,"overran":-2,"overreact":-2,"overreacted":-2,"overreacting":-2,"overreaction":-2,"overreacts":-2,"oversell":-2,"overselling":-2,"oversells":-2,"oversight":-1,"oversimplification":-2,"oversimplified":-2,"oversimplifies":-2,"oversimplify":-2,"oversold":-2,"overstatement":-2,"overstatements":-2,"overweight":-1,"overwrought":-3,"oxymoron":-1,"pain":-2,"pained":-2,"painful":-2,"panic":-3,"panicked":-3,"panics":-3,"paradise":3,"paradox":-1,"pardon":2,"pardoned":2,"pardoning":2,"pardons":2,"parley":-1,"passion":1,"passionate":2,"passive":-1,"passively":-1,"pathetic":-2,"pay":-1,"peace":2,"peaceful":2,"peacefully":2,"penalize":-2,"penalized":-2,"penalizes":-2,"penalizing":-2,"penalty":-2,"pensive":-1,"perfect":3,"perfected":2,"perfection":3,"perfectly":3,"perfects":2,"peril":-2,"perjury":-3,"perpetrated":-2,"perpetrator":-2,"perpetrators":-2,"perplexed":-2,"persecute":-2,"persecuted":-2,"persecutes":-2,"persecuting":-2,"perturbed":-2,"pervert":-3,"pesky":-2,"pessimism":-2,"pessimistic":-2,"petrified":-2,"philanthropy":2,"phobic":-2,"picturesque":2,"pileup":-1,"pillage":-2,"pique":-2,"piqued":-2,"piss":-4,"pissed":-4,"pissing":-3,"piteous":-2,"pitied":-1,"pity":-2,"plague":-3,"plagued":-3,"plagues":-3,"plaguing":-3,"playful":2,"pleasant":3,"please":1,"pleased":3,"pleasurable":3,"pleasure":3,"plodding":-2,"poignant":2,"pointless":-2,"poised":-2,"poison":-2,"poisoned":-2,"poisons":-2,"polished":2,"polite":2,"politeness":2,"pollutant":-2,"pollute":-2,"polluted":-2,"polluter":-2,"polluters":-2,"pollutes":-2,"pollution":-2,"poor":-2,"poorer":-2,"poorest":-2,"poorly":-2,"popular":3,"popularity":3,"positive":2,"positively":2,"possessive":-2,"post-traumatic":-2,"postpone":-1,"postponed":-1,"postpones":-1,"postponing":-1,"poverty":-1,"powerful":2,"powerless":-2,"praise":3,"praised":3,"praises":3,"praising":3,"pray":1,"praying":1,"prays":1,"prblm":-2,"prblms":-2,"predatory":-2,"prepared":1,"pressure":-1,"pressured":-2,"pretend":-1,"pretending":-1,"pretends":-1,"pretty":1,"prevent":-1,"prevented":-1,"preventing":-1,"prevents":-1,"prick":-5,"prison":-2,"prisoner":-2,"prisoners":-2,"privileged":2,"proactive":2,"problem":-2,"problems":-2,"profit":2,"profitable":2,"profiteer":-2,"profits":2,"progress":2,"prohibit":-1,"prohibits":-1,"prominent":2,"promise":1,"promised":1,"promises":1,"promote":1,"promoted":1,"promotes":1,"promoting":1,"promptly":1,"propaganda":-2,"prosecute":-1,"prosecuted":-2,"prosecutes":-1,"prosecution":-1,"prospect":1,"prospects":1,"prosperity":3,"prosperous":3,"protect":1,"protected":1,"protects":1,"protest":-2,"protesters":-2,"protesting":-2,"protests":-2,"proud":2,"proudly":2,"provoke":-1,"provoked":-1,"provokes":-1,"provoking":-1,"prudence":2,"pseudoscience":-3,"psychopathic":-2,"punish":-2,"punished":-2,"punishes":-2,"punishing":-2,"punitive":-2,"pure":1,"purest":1,"purposeful":2,"pushy":-1,"puzzled":-2,"quaking":-2,"qualities":2,"quality":2,"questionable":-2,"questioned":-1,"questioning":-1,"racism":-3,"racist":-3,"racists":-3,"rage":-2,"rageful":-2,"rainy":-1,"rant":-3,"ranter":-3,"ranters":-3,"rants":-3,"rape":-4,"raped":-4,"rapist":-4,"rapture":2,"raptured":2,"raptures":2,"rapturous":4,"rash":-2,"ratified":2,"reach":1,"reached":1,"reaches":1,"reaching":1,"reassure":1,"reassured":1,"reassures":1,"reassuring":2,"rebel":-2,"rebellion":-2,"rebels":-2,"recession":-2,"reckless":-2,"recognition":2,"recommend":2,"recommended":2,"recommends":2,"redeemed":2,"refine":1,"refined":1,"refines":1,"refreshingly":2,"refuse":-2,"refused":-2,"refuses":-2,"refusing":-2,"regret":-2,"regretful":-2,"regrets":-2,"regretted":-2,"regretting":-2,"reigning":1,"reject":-1,"rejected":-1,"rejecting":-1,"rejection":-2,"rejects":-1,"rejoice":4,"rejoiced":4,"rejoices":4,"rejoicing":4,"relaxed":2,"relentless":-1,"reliability":2,"reliable":2,"reliably":2,"reliant":2,"relieve":1,"relieved":2,"relieves":1,"relieving":2,"relishing":2,"remarkable":2,"remorse":-2,"repellent":-2,"repercussion":-2,"repercussions":-2,"reprimand":-2,"reprimanded":-2,"reprimanding":-2,"reprimands":-2,"repulse":-1,"repulsed":-2,"repulsive":-2,"rescue":2,"rescued":2,"rescues":2,"resentful":-2,"resign":-1,"resigned":-1,"resigning":-1,"resigns":-1,"resolute":2,"resolution":2,"resolve":2,"resolved":2,"resolves":2,"resolving":2,"respect":2,"respected":2,"respects":2,"responsibility":1,"responsible":2,"responsive":2,"restful":2,"restless":-2,"restore":1,"restored":1,"restores":1,"restoring":1,"restrict":-2,"restricted":-2,"restricting":-2,"restriction":-2,"restrictive":-1,"restricts":-2,"retained":-1,"retard":-2,"retarded":-2,"retreat":-1,"revenge":-2,"revengeful":-2,"revered":2,"revive":2,"revives":2,"revolting":-2,"reward":2,"rewarded":2,"rewarding":2,"rewards":2,"rich":2,"richly":2,"ridiculous":-3,"rig":-1,"rigged":-1,"right direction":3,"righteousness":2,"rightful":2,"rightfully":2,"rigorous":3,"rigorously":3,"riot":-2,"riots":-2,"rise":1,"rises":1,"risk":-2,"risks":-2,"risky":-2,"riveting":3,"rob":-2,"robber":-2,"robed":-2,"robing":-2,"robs":-2,"robust":2,"rofl":4,"roflcopter":4,"roflmao":4,"romance":2,"romantical":2,"romantically":2,"rose":1,"rotfl":4,"rotflmfao":4,"rotflol":4,"rotten":-3,"rude":-2,"ruin":-2,"ruined":-2,"ruining":-2,"ruins":-2,"sabotage":-2,"sad":-2,"sadden":-2,"saddened":-2,"sadly":-2,"safe":1,"safely":1,"safer":2,"safety":1,"salient":1,"salute":2,"saluted":2,"salutes":2,"saluting":2,"salvation":2,"sappy":-1,"sarcastic":-2,"satisfied":2,"savange":-2,"savanges":-2,"save":2,"saved":2,"savings":1,"scam":-2,"scams":-2,"scandal":-3,"scandalous":-3,"scandals":-3,"scapegoat":-2,"scapegoats":-2,"scare":-2,"scared":-2,"scar":-2,"scars":-2,"scary":-2,"sceptical":-2,"scold":-2,"scoop":3,"scorn":-2,"scornful":-2,"scream":-2,"screamed":-2,"screaming":-2,"screams":-2,"screwed":-2,"screwed up":-3,"scum":-3,"scumbag":-4,"seamless":2,"seamlessly":2,"secure":2,"secured":2,"secures":2,"sedition":-2,"seditious":-2,"seduced":-1,"self-abuse":-2,"self-confident":2,"self-contradictory":-2,"self-deluded":-2,"selfish":-3,"selfishness":-3,"sentence":-2,"sentenced":-2,"sentences":-2,"sentencing":-2,"serene":2,"settlement":1,"settlements":1,"severe":-2,"severely":-2,"sexist":-2,"sexistic":-2,"sexy":3,"shaky":-2,"shame":-2,"shamed":-2,"shameful":-2,"share":1,"shared":1,"shares":1,"shattered":-2,"shit":-4,"shithead":-4,"shitty":-3,"shock":-2,"shocked":-2,"shocking":-2,"shocks":-2,"shoody":-2,"shoot":-1,"short-sighted":-2,"short-sightedness":-2,"shortage":-2,"shortages":-2,"shrew":-4,"shy":-1,"sick":-2,"sickness":-2,"side-effect":-2,"side-effects":-2,"sigh":-2,"significance":1,"significant":1,"silencing":-1,"silly":-1,"simplicity":1,"sin":-2,"sincere":2,"sincerely":2,"sincerest":2,"sincerity":2,"sinful":-3,"singleminded":-2,"sinister":-2,"sins":-2,"skeptic":-2,"skeptical":-2,"skepticism":-2,"skeptics":-2,"slam":-2,"slash":-2,"slashed":-2,"slashes":-2,"slashing":-2,"slave":-3,"slavery":-3,"slaves":-3,"sleeplessness":-2,"slick":2,"slicker":2,"slickest":2,"slip":-1,"sloppy":-2,"sluggish":-2,"slumping":-1,"slut":-5,"smart":1,"smarter":2,"smartest":2,"smear":-2,"smile":2,"smiled":2,"smiles":2,"smiling":2,"smog":-2,"smuggle":-2,"smuggled":-2,"smuggling":-2,"smuggles":-2,"sneaky":-1,"sneeze":-2,"sneezed":-2,"sneezes":-2,"sneezing":-2,"snub":-2,"snubbed":-2,"snubbing":-2,"snubs":-2,"sobering":1,"solemn":-1,"solid":2,"solidarity":2,"solidified":2,"solidifies":2,"solidify":2,"solidifying":2,"solution":1,"solutions":1,"solve":1,"solved":1,"solves":1,"solving":1,"somber":-2,"some kind":0,"son-of-a-bitch":-5,"soothe":3,"soothed":3,"soothing":3,"sophisticated":2,"sore":-1,"sorrow":-2,"sorrowful":-2,"sorry":-1,"spacious":1,"spam":-2,"spammer":-3,"spammers":-3,"spamming":-2,"spark":1,"sparkle":3,"sparkles":3,"sparkling":3,"spearhead":2,"speculative":-2,"spirit":1,"spirited":2,"spiritless":-2,"spiteful":-2,"splendid":3,"spoiled":-2,"spoilt":-2,"spotless":2,"sprightly":2,"squander":-2,"squandered":-2,"squandering":-2,"squanders":-2,"squelched":-1,"stab":-2,"stabbed":-2,"stable":2,"stabs":-2,"stall":-2,"stalled":-2,"stalling":-2,"stamina":2,"stampede":-2,"stank":-2,"startled":-2,"startling":3,"starve":-2,"starved":-2,"starves":-2,"starving":-2,"steadfast":2,"steal":-2,"stealing":-2,"steals":-2,"stereotype":-2,"stereotyped":-2,"stifled":-1,"stimulate":1,"stimulated":1,"stimulates":1,"stimulating":2,"stingy":-2,"stink":-2,"stinked":-2,"stinker":-2,"stinking":-2,"stinks":-2,"stinky":-2,"stole":-2,"stolen":-2,"stop":-1,"stopped":-1,"stopping":-1,"stops":-1,"stout":2,"straight":1,"strange":-1,"strangely":-1,"strangled":-2,"strength":2,"strengthen":2,"strengthened":2,"strengthening":2,"strengthens":2,"strengths":2,"stress":-1,"stressed":-2,"stressor":-2,"stressors":-2,"stricken":-2,"strike":-1,"strikers":-2,"strikes":-1,"strong":2,"stronger":2,"strongest":2,"struck":-1,"struggle":-2,"struggled":-2,"struggles":-2,"struggling":-2,"stubborn":-2,"stuck":-2,"stunned":-2,"stunning":4,"stupid":-2,"stupidity":-3,"stupidly":-2,"suave":2,"subpoena":-2,"substantial":1,"substantially":1,"subversive":-2,"succeed":3,"succeeded":3,"succeeding":3,"succeeds":3,"success":2,"successful":3,"successfully":3,"suck":-3,"sucks":-3,"sue":-2,"sued":-2,"sueing":-2,"sues":-2,"suffer":-2,"suffered":-2,"sufferer":-2,"sufferers":-2,"suffering":-2,"suffers":-2,"suicidal":-2,"suicide":-2,"suicides":-2,"suing":-2,"suitable":2,"suited":2,"sulking":-2,"sulky":-2,"sullen":-2,"sunshine":2,"super":3,"superb":5,"superior":2,"support":2,"supported":2,"supporter":1,"supporters":1,"supporting":1,"supportive":2,"supports":2,"supreme":4,"survived":2,"surviving":2,"survivor":2,"suspect":-1,"suspected":-1,"suspecting":-1,"suspects":-1,"suspend":-1,"suspended":-1,"suspicious":-2,"sustainability":1,"sustainable":2,"sustainably":2,"swear":-2,"swearing":-2,"swears":-2,"sweet":2,"sweeter":3,"sweetest":3,"swift":2,"swiftly":2,"swindle":-3,"swindles":-3,"swindling":-3,"sympathetic":2,"sympathy":2,"taint":-2,"tainted":-2,"talent":2,"tard":-2,"tarnish":-2,"tarnished":-2,"tarnishes":-2,"tears":-2,"tender":2,"tenderness":2,"tense":-2,"tension":-1,"terrible":-3,"terribly":-3,"terrific":4,"terrifically":4,"terrified":-3,"terror":-3,"terrorist":-2,"terrorists":-2,"terrorize":-3,"terrorized":-3,"terrorizes":-3,"thank":2,"thankful":2,"thanks":2,"thorny":-2,"thoughtful":2,"thoughtless":-2,"threat":-2,"threaten":-2,"threatened":-2,"threatening":-2,"threatens":-2,"threats":-2,"thrilled":5,"thwart":-2,"thwarted":-2,"thwarting":-2,"thwarts":-2,"timid":-2,"timorous":-2,"tired":-2,"tits":-2,"tolerance":2,"tolerant":2,"toothless":-2,"top":2,"tops":2,"torn":-2,"torture":-4,"tortured":-4,"tortures":-4,"torturing":-4,"totalitarian":-2,"totalitarianism":-2,"tout":-2,"touted":-2,"touting":-2,"touts":-2,"toxic":-3,"tragedies":-2,"tragedy":-2,"tragic":-2,"tranquil":2,"transgress":-2,"transgressed":-2,"transgresses":-2,"transgressing":-2,"trap":-1,"trapped":-2,"traps":-1,"trauma":-3,"traumatic":-3,"travesty":-2,"treason":-3,"treasonous":-3,"treasure":2,"treasures":2,"trembling":-2,"tremor":-2,"tremors":-2,"tremulous":-2,"tribulation":-2,"tribute":2,"tricked":-2,"trickery":-2,"triumph":4,"triumphant":4,"troll":-2,"trouble":-2,"troubled":-2,"troubles":-2,"troubling":-2,"true":2,"trust":1,"trusted":2,"trusts":1,"tumor":-2,"twat":-5,"tyran":-3,"tyrannic":-3,"tyrannical":-3,"tyrannically":-3,"tyrans":-3,"ubiquitous":2,"ugh":-2,"ugliness":-3,"ugly":-3,"unable":-2,"unacceptable":-2,"unappeasable":-2,"unappreciated":-2,"unapproved":-2,"unattractive":-2,"unavailable":-1,"unavailing":-2,"unaware":-2,"unbearable":-2,"unbelievable":-1,"unbelieving":-1,"unbiased":2,"uncertain":-1,"unclear":-1,"uncomfortable":-2,"unconcerned":-2,"unconfirmed":-1,"unconvinced":-1,"uncredited":-1,"undecided":-1,"undercooked":-2,"underestimate":-1,"underestimated":-1,"underestimates":-1,"underestimating":-1,"undermine":-2,"undermined":-2,"undermines":-2,"undermining":-2,"underperform":-2,"underperformed":-2,"underperforming":-2,"underperforms":-2,"undeserving":-2,"undesirable":-2,"uneasy":-2,"unemployed":-1,"unemployment":-2,"unequal":-1,"unequaled":2,"unethical":-2,"uneventful":-2,"unfair":-2,"unfavorable":-2,"unfit":-2,"unfitted":-2,"unfocused":-2,"unforgivable":-3,"unforgiving":-2,"unfulfilled":-2,"unfunny":-2,"ungenerous":-2,"ungrateful":-3,"unhappy":-2,"unhappiness":-2,"unhealthy":-2,"unhygienic":-2,"unified":1,"unimaginative":-2,"unimpressed":-2,"uninspired":-2,"unintelligent":-2,"unintentional":-2,"uninvolving":-2,"united":1,"unjust":-2,"unlikely":-1,"unlovable":-2,"unloved":-2,"unmatched":1,"unmotivated":-2,"unoriginal":-2,"unparliamentary":-2,"unpleasant":-2,"unpleasantness":-2,"unprofessional":-2,"unravel":1,"unreleting":-2,"unresearched":-2,"unsafe":-2,"unsatisfied":-2,"unscientific":-2,"unsecured":-2,"unselfish":2,"unsettled":-1,"unsold":-1,"unsophisticated":-2,"unsound":-2,"unstable":-2,"unstoppable":2,"unsuccessful":-2,"unsuccessfully":-2,"unsupported":-2,"unsure":-1,"untarnished":2,"untrue":-2,"unwanted":-2,"unworthy":-2,"uplifting":2,"uproar":-3,"upset":-2,"upsets":-2,"upsetting":-2,"uptight":-2,"urgent":-1,"useful":2,"usefulness":2,"useless":-2,"uselessness":-2,"vague":-2,"validate":1,"validated":1,"validates":1,"validating":1,"vapid":-2,"verdict":-1,"verdicts":-1,"vested":1,"vexation":-2,"vexing":-2,"vibrant":3,"vicious":-2,"victim":-3,"victimization":-3,"victimize":-3,"victimized":-3,"victimizes":-3,"victimizing":-3,"victims":-3,"victor":3,"victors":3,"victory":3,"victories":3,"vigilant":3,"vigor":3,"vile":-3,"vindicate":2,"vindicated":2,"vindicates":2,"vindicating":2,"violate":-2,"violated":-2,"violates":-2,"violating":-2,"violation":-2,"violations":-2,"violence":-3,"violence-related":-3,"violent":-3,"violently":-3,"virtuous":2,"virulent":-2,"vision":1,"visionary":3,"visioning":1,"visions":1,"vitality":3,"vitamin":1,"vitriolic":-3,"vivacious":3,"vividly":2,"vociferous":-1,"vomit":-3,"vomited":-3,"vomiting":-3,"vomits":-3,"vulnerability":-2,"vulnerable":-2,"walkout":-2,"walkouts":-2,"wanker":-3,"want":1,"war":-2,"warfare":-2,"warm":1,"warmhearted":2,"warmness":2,"warmth":2,"warn":-2,"warned":-2,"warning":-3,"warnings":-3,"warns":-2,"waste":-1,"wasted":-2,"wasting":-2,"wavering":-1,"weak":-2,"weakened":-2,"weakness":-2,"weaknesses":-2,"wealth":3,"wealthier":2,"wealthy":2,"weary":-2,"weep":-2,"weeping":-2,"weird":-2,"welcome":2,"welcomed":2,"welcomes":2,"well-being":2,"well-championed":3,"well-developed":2,"well-established":2,"well-focused":2,"well-groomed":2,"well-proportioned":2,"whimsical":1,"whitewash":-3,"whore":-4,"wicked":-2,"widowed":-1,"willingness":2,"win":4,"winner":4,"winning":4,"wins":4,"winwin":3,"wisdom":1,"wish":1,"wishes":1,"wishing":1,"withdrawal":-3,"wits":2,"woebegone":-2,"woeful":-3,"won":3,"wonderful":4,"wonderfully":4,"woo":3,"woohoo":3,"wooo":4,"woow":4,"worn":-1,"worried":-3,"worries":-3,"worry":-3,"worrying":-3,"worse":-3,"worsen":-3,"worsened":-3,"worsening":-3,"worsens":-3,"worshiped":3,"worst":-3,"worth":2,"worthless":-2,"worthy":2,"wow":4,"wowow":4,"wowww":4,"wrathful":-3,"wreck":-2,"wrenching":-2,"wrong":-2,"wrongdoing":-2,"wrongdoings":-2,"wronged":-2,"wrongful":-2,"wrongfully":-2,"wrongly":-2,"wtf":-4,"wtff":-4,"wtfff":-4,"xo":3,"xoxo":3,"xoxoxo":4,"xoxoxoxo":4,"yeah":1,"yearning":1,"yeees":2,"yes":1,"youthful":2,"yucky":-2,"yummy":3,"zealot":-2,"zealots":-2,"zealous":2,"":null}
},{}],8:[function(require,module,exports){
(function (process){
/**
 * AFINN-based sentiment analysis for Node.js
 *
 * @package sentiment
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var afinn = require('../build/AFINN.json');
var tokenize = require('./tokenize');

/**
 * These words "flip" the sentiment of the following word.
 */
var negators = {
    'cant': 1,
    'can\'t': 1,
    'dont': 1,
    'don\'t': 1,
    'doesnt': 1,
    'doesn\'t': 1,
    'not': 1,
    'non': 1,
    'wont': 1,
    'won\'t': 1
};

/**
 * Performs sentiment analysis on the provided input 'phrase'.
 *
 * @param {String} Input phrase
 * @param {Object} Optional sentiment additions to AFINN (hash k/v pairs)
 *
 * @return {Object}
 */
module.exports = function (phrase, inject, callback) {
    // Parse arguments
    if (typeof phrase === 'undefined') phrase = '';
    if (typeof inject === 'undefined') inject = null;
    if (typeof inject === 'function') callback = inject;
    if (typeof callback === 'undefined') callback = null;

    // Merge
    if (inject !== null) {
        afinn = Object.assign(afinn, inject);
    }

    // Storage objects
    var tokens      = tokenize(phrase),
        score       = 0,
        words       = [],
        positive    = [],
        negative    = [];

    // Iterate over tokens
    var len = tokens.length;
    while (len--) {
        var obj = tokens[len];
        var item = afinn[obj];
        if (!afinn.hasOwnProperty(obj)) continue;

        // Check for negation
        if (len > 0) {
            var prevtoken = tokens[len-1];
            if (negators[prevtoken]) item = -item;
        }

        words.push(obj);
        if (item > 0) positive.push(obj);
        if (item < 0) negative.push(obj);

        score += item;
    }

    // Handle optional async interface
    var result = {
        score:          score,
        comparative:    score / tokens.length,
        tokens:         tokens,
        words:          words,
        positive:       positive,
        negative:       negative
    };

    if (callback === null) return result;
    process.nextTick(function () {
        callback(null, result);
    });
};

}).call(this,require('_process'))
},{"../build/AFINN.json":7,"./tokenize":9,"_process":13}],9:[function(require,module,exports){
/**
 * Remove special characters and returns an array of tokens (words).
 *
 * @param   {string}  input
 *
 * @return  {array}
 */
module.exports = function (input) {
    return input
        .toLowerCase()
        .replace(/[^a-z0-9á-úñäâàéèëêïîöôùüûœç\-\' ]+/g, '')
        .replace('/ {2,}/',' ')
        .split(' ');
};

},{}],10:[function(require,module,exports){
'use strict';

/* Dependencies. */
var has = require('has');
var pluralize = require('pluralize');
var normalize = require('normalize-strings');
var problematic = require('./problematic');

/* Expose. */
module.exports = syllables;

/* Two expressions of occurrences which normally would
 * be counted as two syllables, but should be counted
 * as one. */
var EXPRESSION_MONOSYLLABIC_ONE = new RegExp(
  'cia(l|$)|' +
  'tia|' +
  'cius|' +
  'cious|' +
  '[^aeiou]giu|' +
  '[aeiouy][^aeiouy]ion|' +
  'iou|' +
  'sia$|' +
  'eous$|' +
  '[oa]gue$|' +
  '.[^aeiuoycgltdb]{2,}ed$|' +
  '.ely$|' +
  '^jua|' +
  'uai|' +
  'eau|' +
  '^busi$|' +
  '(' +
    '[aeiouy]' +
    '(' +
      'b|' +
      'c|' +
      'ch|' +
      'dg|' +
      'f|' +
      'g|' +
      'gh|' +
      'gn|' +
      'k|' +
      'l|' +
      'lch|' +
      'll|' +
      'lv|' +
      'm|' +
      'mm|' +
      'n|' +
      'nc|' +
      'ng|' +
      'nch|' +
      'nn|' +
      'p|' +
      'r|' +
      'rc|' +
      'rn|' +
      'rs|' +
      'rv|' +
      's|' +
      'sc|' +
      'sk|' +
      'sl|' +
      'squ|' +
      'ss|' +
      'th|' +
      'v|' +
      'y|' +
      'z' +
    ')' +
    'ed$' +
  ')|' +
  '(' +
    '[aeiouy]' +
    '(' +
      'b|' +
      'ch|' +
      'd|' +
      'f|' +
      'gh|' +
      'gn|' +
      'k|' +
      'l|' +
      'lch|' +
      'll|' +
      'lv|' +
      'm|' +
      'mm|' +
      'n|' +
      'nch|' +
      'nn|' +
      'p|' +
      'r|' +
      'rn|' +
      'rs|' +
      'rv|' +
      's|' +
      'sc|' +
      'sk|' +
      'sl|' +
      'squ|' +
      'ss|' +
      'st|' +
      't|' +
      'th|' +
      'v|' +
      'y' +
    ')' +
    'es$' +
  ')',
  'g'
);

var EXPRESSION_MONOSYLLABIC_TWO = new RegExp(
  '[aeiouy]' +
  '(' +
    'b|' +
    'c|' +
    'ch|' +
    'd|' +
    'dg|' +
    'f|' +
    'g|' +
    'gh|' +
    'gn|' +
    'k|' +
    'l|' +
    'll|' +
    'lv|' +
    'm|' +
    'mm|' +
    'n|' +
    'nc|' +
    'ng|' +
    'nn|' +
    'p|' +
    'r|' +
    'rc|' +
    'rn|' +
    'rs|' +
    'rv|' +
    's|' +
    'sc|' +
    'sk|' +
    'sl|' +
    'squ|' +
    'ss|' +
    'st|' +
    't|' +
    'th|' +
    'v|' +
    'y|' +
    'z' +
  ')' +
  'e$',
  'g'
);

/* Four expression of occurrences which normally would be
 * counted as one syllable, but should be counted as two. */
var EXPRESSION_DOUBLE_SYLLABIC_ONE = new RegExp(
  '(' +
    '(' +
      '[^aeiouy]' +
    ')\\2l|' +
    '[^aeiouy]ie' +
    '(' +
      'r|' +
      'st|' +
      't' +
    ')|' +
    '[aeiouym]bl|' +
    'eo|' +
    'ism|' +
    'asm|' +
    'thm|' +
    'dnt|' +
    'uity|' +
    'dea|' +
    'gean|' +
    'oa|' +
    'ua|' +
    'eings?|' +
    '[aeiouy]sh?e[rsd]' +
  ')$',
  'g'
);

var EXPRESSION_DOUBLE_SYLLABIC_TWO = new RegExp(
  '[^gq]ua[^auieo]|' +
  '[aeiou]{3}|' +
  '^(' +
    'ia|' +
    'mc|' +
    'coa[dglx].' +
  ')',
  'g'
);

var EXPRESSION_DOUBLE_SYLLABIC_THREE = new RegExp(
  '[^aeiou]y[ae]|' +
  '[^l]lien|' +
  'riet|' +
  'dien|' +
  'iu|' +
  'io|' +
  'ii|' +
  'uen|' +
  'real|' +
  'iell|' +
  'eo[^aeiou]|' +
  '[aeiou]y[aeiou]',
  'g'
);

var EXPRESSION_DOUBLE_SYLLABIC_FOUR = /[^s]ia/;

/* Expression to match single syllable pre- and suffixes. */
var EXPRESSION_SINGLE = new RegExp(
  '^' +
  '(' +
    'un|' +
    'fore|' +
    'ware|' +
    'none?|' +
    'out|' +
    'post|' +
    'sub|' +
    'pre|' +
    'pro|' +
    'dis|' +
    'side' +
  ')' +
  '|' +
  '(' +
    'ly|' +
    'less|' +
    'some|' +
    'ful|' +
    'ers?|' +
    'ness|' +
    'cians?|' +
    'ments?|' +
    'ettes?|' +
    'villes?|' +
    'ships?|' +
    'sides?|' +
    'ports?|' +
    'shires?|' +
    'tion(ed)?' +
  ')' +
  '$',
  'g'
);

/* Expression to match double syllable pre- and suffixes. */
var EXPRESSION_DOUBLE = new RegExp(
  '^' +
  '(' +
    'above|' +
    'anti|' +
    'ante|' +
    'counter|' +
    'hyper|' +
    'afore|' +
    'agri|' +
    'infra|' +
    'intra|' +
    'inter|' +
    'over|' +
    'semi|' +
    'ultra|' +
    'under|' +
    'extra|' +
    'dia|' +
    'micro|' +
    'mega|' +
    'kilo|' +
    'pico|' +
    'nano|' +
    'macro' +
  ')' +
  '|' +
  '(' +
    'fully|' +
    'berry|' +
    'woman|' +
    'women' +
  ')' +
  '$',
  'g'
);

/* Expression to match triple syllable suffixes. */
var EXPRESSION_TRIPLE = /(ology|ologist|onomy|onomist)$/g;

/* Expression to split on word boundaries. */
var SPLIT = /\b/g;

/* Expression to remove non-alphabetic characters from
 * a given value. */
var EXPRESSION_NONALPHABETIC = /[^a-z]/g;

/* Wrapper to support multiple word-parts (GH-11). */
function syllables(value) {
  var values = normalize(String(value)).toLowerCase().split(SPLIT);
  var length = values.length;
  var index = -1;
  var total = 0;

  while (++index < length) {
    total += syllable(values[index].replace(EXPRESSION_NONALPHABETIC, ''));
  }

  return total;
}

/* Get syllables in a given value. */
function syllable(value) {
  var count = 0;
  var index;
  var length;
  var singular;
  var parts;
  var addOne;
  var subtractOne;

  if (!value.length) {
    return count;
  }

  /* Return early when possible. */
  if (value.length < 3) {
    return 1;
  }

  /* If `value` is a hard to count, it might be
   * in `problematic`. */
  if (has(problematic, value)) {
    return problematic[value];
  }

  /* Additionally, the singular word might be
   * in `problematic`. */
  singular = pluralize(value, 1);

  if (has(problematic, singular)) {
    return problematic[singular];
  }

  addOne = returnFactory(1);
  subtractOne = returnFactory(-1);

  /* Count some prefixes and suffixes, and remove
   * their matched ranges. */
  value = value
    .replace(EXPRESSION_TRIPLE, countFactory(3))
    .replace(EXPRESSION_DOUBLE, countFactory(2))
    .replace(EXPRESSION_SINGLE, countFactory(1));

  /* Count multiple consonants. */
  parts = value.split(/[^aeiouy]+/);
  index = -1;
  length = parts.length;

  while (++index < length) {
    if (parts[index] !== '') {
      count++;
    }
  }

  /* Subtract one for occurrences which should be
   * counted as one (but are counted as two). */
  value
    .replace(EXPRESSION_MONOSYLLABIC_ONE, subtractOne)
    .replace(EXPRESSION_MONOSYLLABIC_TWO, subtractOne);

  /* Add one for occurrences which should be counted
   * as two (but are counted as one). */
  value
    .replace(EXPRESSION_DOUBLE_SYLLABIC_ONE, addOne)
    .replace(EXPRESSION_DOUBLE_SYLLABIC_TWO, addOne)
    .replace(EXPRESSION_DOUBLE_SYLLABIC_THREE, addOne)
    .replace(EXPRESSION_DOUBLE_SYLLABIC_FOUR, addOne);

  /* Make sure at least on is returned. */
  return count || 1;

 /* Define scoped counters, to be used
  * in `String#replace()` calls.
  * The scoped counter removes the matched value
  * from the input. */
  function countFactory(addition) {
    return counter;
    function counter() {
      count += addition;
      return '';
    }
  }

 /* Define scoped counters, to be used
  * in `String#replace()` calls.
  * The scoped counter does not remove the matched
  * value from the input. */
  function returnFactory(addition) {
    return returner;
    function returner($0) {
      count += addition;
      return $0;
    }
  }
}

},{"./problematic":11,"has":3,"normalize-strings":5,"pluralize":6}],11:[function(require,module,exports){
module.exports={
  "abalone": 4,
  "abare": 3,
  "abed": 2,
  "abruzzese": 4,
  "abbruzzese": 4,
  "aborigine": 5,
  "acreage": 3,
  "adame": 3,
  "adieu": 2,
  "adobe": 3,
  "anemone": 4,
  "apache": 3,
  "aphrodite": 4,
  "apostrophe": 4,
  "ariadne": 4,
  "cafe": 2,
  "calliope": 4,
  "catastrophe": 4,
  "chile": 2,
  "chloe": 2,
  "circe": 2,
  "coyote": 3,
  "epitome": 4,
  "forever": 3,
  "gethsemane": 4,
  "guacamole": 4,
  "hyperbole": 4,
  "jesse": 2,
  "jukebox": 2,
  "karate": 3,
  "machete": 3,
  "maybe": 2,
  "people": 2,
  "recipe": 3,
  "sesame": 3,
  "shoreline": 2,
  "simile": 3,
  "syncope": 3,
  "tamale": 3,
  "yosemite": 4,
  "daphne": 2,
  "eurydice": 4,
  "euterpe": 3,
  "hermione": 4,
  "penelope": 4,
  "persephone": 4,
  "phoebe": 2,
  "zoe": 2
}

},{}],12:[function(require,module,exports){

var sentiment = require('sentiment');
var syllable = require('syllable');

/*
SCORES holds the information about all politicians in our dataset.
Unfortunately, it must be defined above the functions in which it is used.
Keep scrolling!
*/

var SCORES = [
['House', 'AK', 'R', 'Don', 'Young', '0.28', '', ''],
['House', 'AL', 'R', 'Jo', 'Bonner', '0.395', '', ''],
['House', 'AL', 'R', 'Bradley', 'Byrne', '0.581', '', ''],
['House', 'AL', 'R', 'Martha', 'Roby', '0.359', '', ''],
['House', 'AL', 'R', 'Michael', 'Rogers', '0.346', '', ''],
['House', 'AL', 'R', 'Robert', 'Aderholt', '0.376', '', ''],
['House', 'AL', 'R', 'Mo', 'Brooks', '0.61', '', ''],
['House', 'AL', 'R', 'Spencer', 'Bachus', '0.411', '', ''],
['House', 'AL', 'D', 'Terri', 'Sewell', '-0.353', '', ''],
['House', 'AR', 'R', 'Rick', 'Crawford', '0.341', '', ''],
['House', 'AR', 'R', 'Tim', 'Griffin', '0.448', '', ''],
['House', 'AR', 'R', 'Steve', 'Womack', '0.34', '', ''],
['House', 'AR', 'R', 'Tom', 'Cotton', '0.689', '', ''],
['House', 'AZ', 'D', 'Ann', 'Kirkpatrick', '-0.123', '', ''],
['House', 'AZ', 'D', 'Ron', 'Barber', '-0.104', '', ''],
['House', 'AZ', 'D', 'Raul', 'Grijalva', '-0.605', '', ''],
['House', 'AZ', 'R', 'Paul', 'Gosar', '0.588', '', ''],
['House', 'AZ', 'R', 'Matt', 'Salmon', '0.72', '', ''],
['House', 'AZ', 'R', 'David', 'Schweikert', '0.715', '', ''],
['House', 'AZ', 'D', 'Ed', 'Pastor', '-0.423', '', ''],
['House', 'AZ', 'R', 'Trent', 'Franks', '0.787', '', ''],
['House', 'AZ', 'D', 'Kyrsten', 'Sinema', '-0.116', '', ''],
['House', 'CA', 'R', 'Doug', 'LaMalfa', '0.6', '', ''],
['House', 'CA', 'D', 'Jared', 'Huffman', '-0.476', '', ''],
['House', 'CA', 'D', 'John', 'Garamendi', '-0.332', '', ''],
['House', 'CA', 'R', 'Tom', 'McClintock', '0.807', '', ''],
['House', 'CA', 'D', 'Mike', 'Thompson', '-0.41', '', ''],
['House', 'CA', 'D', 'Doris', 'Matsui', '-0.45', '', ''],
['House', 'CA', 'D', 'Ami', 'Bera', '-0.203', '', ''],
['House', 'CA', 'R', 'Paul', 'Cook', '0.444', '', ''],
['House', 'CA', 'D', 'Jerry', 'McNerney', '-0.247', '', ''],
['House', 'CA', 'R', 'Jeff', 'Denham', '0.413', '', ''],
['House', 'CA', 'D', 'George', 'Miller', '-0.574', '', ''],
['House', 'CA', 'D', 'Nancy', 'Pelosi', '-0.505', '', ''],
['House', 'CA', 'D', 'Barbara', 'Lee', '-0.71', '', ''],
['House', 'CA', 'D', 'Jackie', 'Speier', '-0.426', '', ''],
['House', 'CA', 'D', 'Eric', 'Swalwell', '-0.37', '', ''],
['House', 'CA', 'D', 'Jim', 'Costa', '-0.18', '', ''],
['House', 'CA', 'D', 'Mike', 'Honda', '-0.554', '', ''],
['House', 'CA', 'D', 'Anna', 'Eshoo', '-0.404', '', ''],
['House', 'CA', 'D', 'Zoe', 'Lofgren', '-0.421', '', ''],
['House', 'CA', 'D', 'Sam', 'Farr', '-0.469', '', ''],
['House', 'CA', 'R', 'David', 'Valadao', '0.334', '', ''],
['House', 'CA', 'R', 'Devin', 'Nunes', '0.502', '', ''],
['House', 'CA', 'R', 'Kevin', 'McCarthy', '0.485', '', ''],
['House', 'CA', 'D', 'Lois', 'Capps', '-0.394', '', ''],
['House', 'CA', 'R', 'Buck', 'McKeon', '0.419', 'Howard', ''],
['House', 'CA', 'D', 'Julia', 'Brownley', '-0.284', '', ''],
['House', 'CA', 'D', 'Judy', 'Chu', '-0.525', '', ''],
['House', 'CA', 'D', 'Adam', 'Schiff', '-0.339', '', ''],
['House', 'CA', 'D', 'Tony', 'Cardenas', '-0.374', '', ''],
['House', 'CA', 'D', 'Brad', 'Sherman', '-0.356', '', ''],
['House', 'CA', 'R', 'Gary', 'Miller', '0.5', '', ''],
['House', 'CA', 'D', 'Grace', 'Napolitano', '-0.457', '', ''],
['House', 'CA', 'D', 'Henry', 'Waxman', '-0.485', '', ''],
['House', 'CA', 'D', 'Xavier', 'Becerra', '-0.529', '', ''],
['House', 'CA', 'D', 'Gloria', 'Negrete McLeod', '-0.437', '', ''],
['House', 'CA', 'D', 'Raul', 'Ruiz', '-0.197', '', ''],
['House', 'CA', 'D', 'Karen', 'Bass', '-0.546', '', ''],
['House', 'CA', 'D', 'Linda', 'Sanchez', '-0.511', '', ''],
['House', 'CA', 'R', 'Ed', 'Royce', '0.715', '', ''],
['House', 'CA', 'D', 'Lucille', 'Roybal-Allard', '-0.476', '', ''],
['House', 'CA', 'D', 'Mark', 'Takano', '-0.515', '', ''],
['House', 'CA', 'R', 'Ken', 'Calvert', '0.371', '', ''],
['House', 'CA', 'D', 'Maxine', 'Waters', '-0.669', '', ''],
['House', 'CA', 'D', 'Janice', 'Hahn', '-0.463', '', ''],
['House', 'CA', 'R', 'John', 'Campbell', '0.784', '', ''],
['House', 'CA', 'D', 'Loretta', 'Sanchez', '-0.369', '', ''],
['House', 'CA', 'D', 'Alan', 'Lowenthal', '-0.531', '', ''],
['House', 'CA', 'R', 'Dana', 'Rohrabacher', '0.66', '', ''],
['House', 'CA', 'R', 'Darrell', 'Issa', '0.541', '', ''],
['House', 'CA', 'R', 'Duncan', 'Hunter', '0.543', '', ''],
['House', 'CA', 'D', 'Juan', 'Vargas', '-0.404', '', ''],
['House', 'CA', 'D', 'Scott', 'Peters', '-0.155', '', ''],
['House', 'CA', 'D', 'Susan', 'Davis', '-0.343', '', ''],
['House', 'CN', 'D', 'John', 'Larson', '-0.412', 'John B.', ''],
['House', 'CN', 'D', 'Joe', 'Courtney', '-0.355', '', ''],
['House', 'CN', 'D', 'Rosa', 'DeLauro', '-0.424', '', ''],
['House', 'CN', 'D', 'Jim', 'Himes', '-0.246', '', ''],
['House', 'CN', 'D', 'Elizabeth', 'Esty', '-0.317', '', ''],
['House', 'CO', 'D', 'Diana', 'DeGette', '-0.451', '', ''],
['House', 'CO', 'D', 'Jared', 'Polis', '-0.317', '', ''],
['House', 'CO', 'R', 'Scott', 'Tipton', '0.478', '', ''],
['House', 'CO', 'R', 'Cory', 'Gardner', '0.527', '', ''],
['House', 'CO', 'R', 'Doug', 'Lamborn', '0.729', '', ''],
['House', 'CO', 'R', 'Mike', 'Coffman', '0.563', '', ''],
['House', 'CO', 'D', 'Ed', 'Perlmutter', '-0.286', '', ''],
['House', 'DE', 'D', 'John', 'Carney', '-0.249', '', ''],
['House', 'FL', 'R', 'Jeff', 'Miller', '0.665', '', ''],
['House', 'FL', 'R', 'Steve', 'Southerland', '0.598', '', ''],
['House', 'FL', 'R', 'Ted', 'Yoho', '0.85', '', ''],
['House', 'FL', 'R', 'Ander', 'Crenshaw', '0.358', '', ''],
['House', 'FL', 'D', 'Corrine', 'Brown', '-0.422', '', ''],
['House', 'FL', 'R', 'Ron', 'DeSantis', '0.739', '', ''],
['House', 'FL', 'R', 'John', 'Mica', '0.476', '', ''],
['House', 'FL', 'R', 'Bill', 'Posey', '0.501', '', ''],
['House', 'FL', 'D', 'Alan', 'Grayson', '-0.409', '', ''],
['House', 'FL', 'R', 'Dan', 'Webster', '0.481', 'Daniel', ''],
['House', 'FL', 'R', 'Rich', 'Nugent', '0.535', '', ''],
['House', 'FL', 'R', 'Gus', 'Bilirakis', '0.393', '', ''],
['House', 'FL', 'R', 'Bill', 'Young', '0.333', '', ''],
['House', 'FL', 'R', 'David', 'Jolly', '0.239', '', ''],
['House', 'FL', 'D', 'Kathy', 'Castor', '-0.423', '', ''],
['House', 'FL', 'R', 'Dennis', 'Ross', '0.604', 'Dennis A.', ''],
['House', 'FL', 'R', 'Vern', 'Buchanan', '0.372', '', ''],
['House', 'FL', 'R', 'Tom', 'Rooney', '0.509', '', ''],
['House', 'FL', 'D', 'Patrick', 'Murphy', '-0.146', '', ''],
['House', 'FL', 'R', 'Trey', 'Radel', '0.725', '', ''],
['House', 'FL', 'R', 'Curt', 'Clawson', '0.752', '', ''],
['House', 'FL', 'D', 'Alcee', 'Hastings', '-0.573', '', ''],
['House', 'FL', 'D', 'Ted', 'Deutch', '-0.426', '', ''],
['House', 'FL', 'D', 'Lois', 'Frankel', '-0.44', '', ''],
['House', 'FL', 'D', 'Debbie', 'Wasserman Schultz', '-0.417', '', ''],
['House', 'FL', 'D', 'Frederica', 'Wilson', '-0.47', '', ''],
['House', 'FL', 'R', 'Mario', 'Diaz-Balart', '0.308', '', ''],
['House', 'FL', 'D', 'Joe', 'Garcia', '-0.184', '', ''],
['House', 'FL', 'R', 'Ileana', 'Ros-Lehtinen', '0.26', '', ''],
['House', 'GA', 'R', 'Jack', 'Kingston', '0.567', '', ''],
['House', 'GA', 'D', 'Sanford', 'Bishop', '-0.264', '', ''],
['House', 'GA', 'R', 'Lynn', 'Westmoreland', '0.713', '', ''],
['House', 'GA', 'D', 'Hank', 'Johnson', '-0.458', '', ''],
['House', 'GA', 'D', 'John', 'Lewis', '-0.597', '', ''],
['House', 'GA', 'R', 'Tom', 'Price', '0.68', '', ''],
['House', 'GA', 'R', 'Rob', 'Woodall', '0.757', 'Robert', ''],
['House', 'GA', 'R', 'Austin', 'Scott', '0.623', '', ''],
['House', 'GA', 'R', 'Doug', 'Collins', '0.696', '', ''],
['House', 'GA', 'R', 'Paul', 'Broun', '0.983', '', ''],
['House', 'GA', 'R', 'Phil', 'Gingrey', '0.596', '', ''],
['House', 'GA', 'D', 'John', 'Barrow', '-0.115', '', ''],
['House', 'GA', 'D', 'David', 'Scott', '-0.308', '', ''],
['House', 'GA', 'R', 'Tom', 'Graves', '0.871', '', ''],
['House', 'HI', 'D', 'Colleen', 'Hanabusa', '-0.374', '', ''],
['House', 'HI', 'D', 'Tulsi', 'Gabbard', '-0.291', '', ''],
['House', 'IA', 'D', 'Bruce', 'Braley', '-0.317', '', ''],
['House', 'IA', 'D', 'David', 'Loebsack', '-0.284', 'Dave', ''],
['House', 'IA', 'R', 'Tom', 'Latham', '0.328', '', ''],
['House', 'IA', 'R', 'Steve', 'King', '0.661', '', ''],
['House', 'ID', 'R', 'Raul', 'Labrador', '0.866', '', ''],
['House', 'ID', 'R', 'Mike', 'Simpson', '0.322', '', ''],
['House', 'IL', 'D', 'Bobby', 'Rush', '-0.495', '', ''],
['House', 'IL', 'D', 'Robin', 'Kelly', '-0.464', '', ''],
['House', 'IL', 'D', 'Dan', 'Lipinski', '-0.241', '', ''],
['House', 'IL', 'D', 'Luis', 'Gutierrez', '-0.501', '', ''],
['House', 'IL', 'D', 'Mike', 'Quigley', '-0.336', '', ''],
['House', 'IL', 'R', 'Peter', 'Roskam', '0.474', '', ''],
['House', 'IL', 'D', 'Danny', 'Davis', '-0.51', 'Danny K.', ''],
['House', 'IL', 'D', 'Tammy', 'Duckworth', '-0.267', '', ''],
['House', 'IL', 'D', 'Jan', 'Schakowsky', '-0.614', 'Janice', ''],
['House', 'IL', 'D', 'Brad', 'Schneider', '-0.195', '', ''],
['House', 'IL', 'D', 'Bill', 'Foster', '-0.203', '', ''],
['House', 'IL', 'D', 'Bill', 'Enyart', '-0.256', 'William', ''],
['House', 'IL', 'R', 'Rodney', 'Davis', '0.412', '', ''],
['House', 'IL', 'R', 'Randy', 'Hultgren', '0.537', '', ''],
['House', 'IL', 'R', 'John', 'Shimkus', '0.401', '', ''],
['House', 'IL', 'R', 'Adam', 'Kinzinger', '0.347', '', ''],
['House', 'IL', 'D', 'Cheri', 'Bustos', '-0.212', '', ''],
['House', 'IL', 'R', 'Aaron', 'Schock', '0.345', '', ''],
['House', 'IN', 'D', 'Peter', 'Visclosky', '-0.403', 'Pete', ''],
['House', 'IN', 'R', 'Jackie', 'Walorski', '0.419', '', ''],
['House', 'IN', 'R', 'Marlin', 'Stutzman', '0.824', '', ''],
['House', 'IN', 'R', 'Todd', 'Rokita', '0.671', '', ''],
['House', 'IN', 'R', 'Susan', 'Brooks', '0.438', '', ''],
['House', 'IN', 'R', 'Luke', 'Messer', '0.593', '', ''],
['House', 'IN', 'D', 'Andre', 'Carson', '-0.417', '', ''],
['House', 'IN', 'R', 'Larry', 'Bucshon', '0.442', '', ''],
['House', 'IN', 'R', 'Todd', 'Young', '0.544', '', ''],
['House', 'KS', 'R', 'Tim', 'Huelskamp', '0.811', '', ''],
['House', 'KS', 'R', 'Lynn', 'Jenkins', '0.563', '', ''],
['House', 'KS', 'R', 'Kevin', 'Yoder', '0.624', '', ''],
['House', 'KS', 'R', 'Mike', 'Pompeo', '0.717', '', ''],
['House', 'KY', 'R', 'Ed', 'Whitfield', '0.318', '', ''],
['House', 'KY', 'R', 'Brett', 'Guthrie', '0.391', '', ''],
['House', 'KY', 'D', 'John', 'Yarmuth', '-0.394', '', ''],
['House', 'KY', 'R', 'Thomas', 'Massie', '0.98', '', ''],
['House', 'KY', 'R', 'Hal', 'Rogers', '0.342', '', ''],
['House', 'KY', 'R', 'Andy', 'Barr', '0.488', '', ''],
['House', 'LA', 'R', 'Steve', 'Scalise', '0.597', '', ''],
['House', 'LA', 'D', 'Cedric', 'Richmond', '-0.441', '', ''],
['House', 'LA', 'R', 'Charles', 'Boustany', '0.427', '', ''],
['House', 'LA', 'R', 'John', 'Fleming', '0.596', '', ''],
['House', 'LA', 'R', 'Rodney', 'Alexander', '0.356', '', ''],
['House', 'LA', 'R', 'Vance', 'McAllister', '0.412', '', ''],
['House', 'LA', 'R', 'Bill', 'Cassidy', '0.477', '', ''],
['House', 'MA', 'D', 'Richard', 'Neal', '-0.427', '', ''],
['House', 'MA', 'D', 'Jim', 'McGovern', '-0.553', '', ''],
['House', 'MA', 'D', 'Niki', 'Tsongas', '-0.43', '', ''],
['House', 'MA', 'D', 'Joe', 'Kennedy III', '-0.463', 'Joseph', 'Kennedy'],
['House', 'MA', 'D', 'Ed', 'Markey', '-0.512', '', ''],
['House', 'MA', 'D', 'Katherine', 'Clark', '-0.562', '', ''],
['House', 'MA', 'D', 'John', 'Tierney', '-0.513', '', ''],
['House', 'MA', 'D', 'Michael', 'Capuano', '-0.592', 'Mike', ''],
['House', 'MA', 'D', 'Steve', 'Lynch', '-0.354', 'Stephen', 'F. Lynch'],
['House', 'MA', 'D', 'Bill', 'Keating', '-0.354', '', ''],
['House', 'MD', 'R', 'Andy', 'Harris', '0.606', 'Andrew', ''],
['House', 'MD', 'D', 'Dutch', 'Ruppersberger', '-0.288', '', ''],
['House', 'MD', 'D', 'John', 'Sarbanes', '-0.455', '', ''],
['House', 'MD', 'D', 'Donna', 'Edwards', '-0.595', '', ''],
['House', 'MD', 'D', 'Steny', 'Hoyer', '-0.377', '', ''],
['House', 'MD', 'D', 'John', 'Delaney', '-0.288', '', ''],
['House', 'MD', 'D', 'Elijah', 'Cummings', '-0.448', '', ''],
['House', 'MD', 'D', 'Chris', 'Van Hollen', '-0.405', '', ''],
['House', 'ME', 'D', 'Chellie', 'Pingree', '-0.485', '', ''],
['House', 'ME', 'D', 'Michael', 'Michaud', '-0.293', '', ''],
['House', 'MI', 'R', 'Dan', 'Benishek', '0.602', '', ''],
['House', 'MI', 'R', 'Bill', 'Huizenga', '0.707', '', ''],
['House', 'MI', 'R', 'Justin', 'Amash', '0.898', '', ''],
['House', 'MI', 'R', 'Dave', 'Camp', '0.397', '', ''],
['House', 'MI', 'D', 'Dan', 'Kildee', '-0.423', '', ''],
['House', 'MI', 'R', 'Fred', 'Upton', '0.346', '', ''],
['House', 'MI', 'R', 'Tim', 'Walberg', '0.563', '', ''],
['House', 'MI', 'R', 'Mike', 'Rogers', '0.434', '', ''],
['House', 'MI', 'D', 'Sander', 'Levin', '-0.378', '', ''],
['House', 'MI', 'R', 'Candice', 'Miller', '0.352', '', ''],
['House', 'MI', 'R', 'Kerry', 'Bentivolio', '0.81', '', ''],
['House', 'MI', 'D', 'John', 'Dingell', '-0.445', '', ''],
['House', 'MI', 'D', 'John', 'Conyers', '-0.687', '', ''],
['House', 'MI', 'D', 'Gary', 'Peters', '-0.224', '', ''],
['House', 'MN', 'D', 'Tim', 'Walz', '-0.285', '', ''],
['House', 'MN', 'R', 'John', 'Kline', '0.532', '', ''],
['House', 'MN', 'R', 'Erik', 'Paulsen', '0.451', '', ''],
['House', 'MN', 'D', 'Betty', 'McCollum', '-0.429', '', ''],
['House', 'MN', 'D', 'Keith', 'Ellison', '-0.583', '', ''],
['House', 'MN', 'R', 'Michele', 'Bachmann', '0.618', '', ''],
['House', 'MN', 'D', 'Collin', 'Peterson', '-0.155', '', ''],
['House', 'MN', 'D', 'Rick', 'Nolan', '-0.411', '', ''],
['House', 'MO', 'D', 'Lacy', 'Clay', '-0.501', '', ''],
['House', 'MO', 'R', 'Ann', 'Wagner', '0.481', '', ''],
['House', 'MO', 'R', 'Blaine', 'Luetkemeyer', '0.487', '', ''],
['House', 'MO', 'R', 'Vicky', 'Hartzler', '0.526', '', ''],
['House', 'MO', 'D', 'Emanuel', 'Cleaver', '-0.442', '', ''],
['House', 'MO', 'R', 'Samuel', 'Graves', '0.471', 'Sam', ''],
['House', 'MO', 'R', 'Billy', 'Long', '0.628', '', ''],
['House', 'MO', 'R', 'Jason', 'Smith', '0.634', '', ''],
['House', 'MS', 'R', 'Alan', 'Nunnelee', '0.503', '', ''],
['House', 'MS', 'D', 'Bennie', 'Thompson', '-0.5', '', ''],
['House', 'MS', 'R', 'Gregg', 'Harper', '0.422', '', ''],
['House', 'MS', 'R', 'Steven', 'Palazzo', '0.514', '', ''],
['House', 'MT', 'R', 'Steve', 'Daines', '0.501', '', ''],
['House', 'NC', 'D', 'G.K.', 'Butterfield', '-0.392', 'G. K.', ''],
['House', 'NC', 'R', 'Renee', 'Ellmers', '0.451', '', ''],
['House', 'NC', 'R', 'Walter Beaman', 'Jones', '0.211', 'Walter', 'Jones Jr.'],
['House', 'NC', 'D', 'David Eugene', 'Price', '-0.341', 'David', ''],
['House', 'NC', 'R', 'Virginia', 'Foxx', '0.695', '', ''],
['House', 'NC', 'R', 'John Howard', 'Coble', '0.532', 'Howard', ''],
['House', 'NC', 'D', 'Mike', 'McIntyre', '-0.148', '', ''],
['House', 'NC', 'R', 'Richard', 'Hudson', '0.73', '', ''],
['House', 'NC', 'R', 'Robert', 'Pittenger', '0.627', '', ''],
['House', 'NC', 'R', 'Patrick', 'McHenry', '0.624', '', ''],
['House', 'NC', 'R', 'Mark', 'Meadows', '0.662', '', ''],
['House', 'NC', 'D', 'Mel', 'Watt', '-0.532', '', ''],
['House', 'NC', 'D', 'Alma', 'Adams', '-0.437', '', ''],
['House', 'NC', 'R', 'George', 'Holding', '0.717', '', ''],
['House', 'ND', 'R', 'Kevin', 'Cramer', '0.346', '', ''],
['House', 'NE', 'R', 'Jeff', 'Fortenberry', '0.314', '', ''],
['House', 'NE', 'R', 'Lee', 'Terry', '0.464', '', ''],
['House', 'NE', 'R', 'Adrian', 'Smith', '0.539', 'Adrian M.', ''],
['House', 'NH', 'D', 'Carol', 'Shea-Porter', '-0.324', '', ''],
['House', 'NH', 'D', 'Annie', 'Kuster', '-0.275', 'Ann McLane', ''],
['House', 'NJ', 'D', 'Rob', 'Andrews', '-0.304', '', ''],
['House', 'NJ', 'D', 'Donald', 'Norcross', '-0.406', '', ''],
['House', 'NJ', 'R', 'Frank', 'LoBiondo', '0.218', '', ''],
['House', 'NJ', 'R', 'Jon', 'Runyan', '0.241', '', ''],
['House', 'NJ', 'R', 'Christopher', 'Smith', '0.153', 'Chris', ''],
['House', 'NJ', 'R', 'Scott', 'Garrett', '0.73', '', ''],
['House', 'NJ', 'D', 'Frank', 'Pallone', '-0.406', '', ''],
['House', 'NJ', 'R', 'Leonard', 'Lance', '0.355', '', ''],
['House', 'NJ', 'D', 'Albio', 'Sires', '-0.399', '', ''],
['House', 'NJ', 'D', 'Bill', 'Pascrell', '-0.37', '', ''],
['House', 'NJ', 'D', 'Donald', 'Payne Jr.', '-0.519', '', 'Payne'],
['House', 'NJ', 'R', 'Rodney', 'Frelinghuysen', '0.307', '', ''],
['House', 'NJ', 'D', 'Rush', 'Holt', '-0.479', '', ''],
['House', 'NM', 'D', 'Michelle', 'Lujan-Grisham', '-0.335', '', ''],
['House', 'NM', 'R', 'Steve', 'Pearce', '0.493', '', ''],
['House', 'NM', 'D', 'Ben Ray', 'Lujan', '-0.374', '', ''],
['House', 'NV', 'D', 'Dina', 'Titus', '-0.304', '', ''],
['House', 'NV', 'R', 'Mark', 'Amodei', '0.457', '', ''],
['House', 'NV', 'R', 'Joe', 'Heck', '0.373', '', ''],
['House', 'NV', 'D', 'Steven', 'Horsford', '-0.368', '', ''],
['House', 'NY', 'D', 'Timothy', 'Bishop', '-0.331', '', ''],
['House', 'NY', 'R', 'Peter', 'King', '0.283', '', ''],
['House', 'NY', 'D', 'Steve', 'Israel', '-0.321', '', ''],
['House', 'NY', 'D', 'Carolyn', 'McCarthy', '-0.294', '', ''],
['House', 'NY', 'D', 'Gregory', 'Meeks', '-0.43', '', ''],
['House', 'NY', 'D', 'Grace', 'Meng', '-0.395', '', ''],
['House', 'NY', 'D', 'Nydia', 'Velazquez', '-0.568', '', ''],
['House', 'NY', 'D', 'Hakeem', 'Jeffries', '-0.481', '', ''],
['House', 'NY', 'D', 'Yvette', 'Clarke', '-0.607', '', ''],
['House', 'NY', 'D', 'Jerrold', 'Nadler', '-0.529', '', ''],
['House', 'NY', 'R', 'Michael', 'Grimm', '0.236', '', ''],
['House', 'NY', 'D', 'Carolyn', 'Maloney', '-0.401', '', ''],
['House', 'NY', 'D', 'Charles', 'Rangel', '-0.528', '', ''],
['House', 'NY', 'D', 'Joseph', 'Crowley', '-0.412', 'Joe', ''],
['House', 'NY', 'D', 'Jose', 'Serrano', '-0.503', 'Jose E.', ''],
['House', 'NY', 'D', 'Eliot', 'Engel', '-0.416', '', ''],
['House', 'NY', 'D', 'Nita', 'Lowey', '-0.394', '', ''],
['House', 'NY', 'D', 'Sean', 'Maloney', '-0.195', 'Sean Patrick', ''],
['House', 'NY', 'R', 'Chris', 'Gibson', '0.232', '', ''],
['House', 'NY', 'D', 'Paul', 'Tonko', '-0.44', '', ''],
['House', 'NY', 'D', 'Bill', 'Owens', '-0.164', '', ''],
['House', 'NY', 'R', 'Richard', 'Hanna', '0.277', '', ''],
['House', 'NY', 'R', 'Tom', 'Reed', '0.374', 'Thomas', ''],
['House', 'NY', 'D', 'Dan', 'Maffei', '-0.182', 'Daniel', ''],
['House', 'NY', 'D', 'Louise', 'Slaughter', '-0.468', '', ''],
['House', 'NY', 'D', 'Brian', 'Higgins', '-0.351', '', ''],
['House', 'NY', 'R', 'Chris', 'Collins', '0.397', '', ''],
['House', 'OH', 'R', 'Steve', 'Chabot', '0.611', '', ''],
['House', 'OH', 'R', 'Brad', 'Wenstrup', '0.593', '', ''],
['House', 'OH', 'D', 'Joyce', 'Beatty', '-0.467', '', ''],
['House', 'OH', 'R', 'Jim', 'Jordan', '0.719', '', ''],
['House', 'OH', 'R', 'Bob', 'Latta', '0.541', '', ''],
['House', 'OH', 'R', 'Bill', 'Johnson', '0.506', '', ''],
['House', 'OH', 'R', 'Bob', 'Gibbs', '0.458', '', ''],
['House', 'OH', 'R', 'John', 'Boehner', '0.53', '', ''],
['House', 'OH', 'D', 'Marcy', 'Kaptur', '-0.355', '', ''],
['House', 'OH', 'R', 'Mike', 'Turner', '0.284', '', ''],
['House', 'OH', 'D', 'Marcia', 'Fudge', '-0.561', '', ''],
['House', 'OH', 'R', 'Pat', 'Tiberi', '0.42', '', ''],
['House', 'OH', 'D', 'Tim', 'Ryan', '-0.405', '', ''],
['House', 'OH', 'R', 'Dave', 'Joyce', '0.316', 'David', ''],
['House', 'OH', 'R', 'Steve', 'Stivers', '0.35', '', ''],
['House', 'OH', 'R', 'Jim', 'Renacci', '0.445', '', ''],
['House', 'OK', 'R', 'Jim', 'Bridenstine', '0.832', '', ''],
['House', 'OK', 'R', 'Markwayne', 'Mullin', '0.528', '', ''],
['House', 'OK', 'R', 'Frank Dean', 'Lucas', '0.38', 'Frank', ''],
['House', 'OK', 'R', 'Tom', 'Cole', '0.371', '', ''],
['House', 'OK', 'R', 'James', 'Lankford', '0.58', '', ''],
['House', 'OR', 'D', 'Suzanne', 'Bonamici', '-0.429', '', ''],
['House', 'OR', 'R', 'Greg', 'Walden', '0.362', '', ''],
['House', 'OR', 'D', 'Earl', 'Blumenauer', '-0.456', '', ''],
['House', 'OR', 'D', 'Peter', 'DeFazio', '-0.467', '', ''],
['House', 'OR', 'D', 'Kurt', 'Schrader', '-0.214', '', ''],
['House', 'PA', 'D', 'Robert', 'Brady', '-0.48', 'Bob', ''],
['House', 'PA', 'D', 'Chaka', 'Fattah', '-0.473', '', ''],
['House', 'PA', 'R', 'Mike', 'Kelly', '0.328', '', ''],
['House', 'PA', 'R', 'Scott', 'Perry', '0.645', '', ''],
['House', 'PA', 'R', 'Glenn', 'Thompson', '0.334', '', ''],
['House', 'PA', 'R', 'Jim', 'Gerlach', '0.25', '', ''],
['House', 'PA', 'R', 'Patrick', 'Meehan', '0.244', 'Pat', ''],
['House', 'PA', 'R', 'Mike', 'Fitzpatrick', '0.244', '', ''],
['House', 'PA', 'R', 'Bill', 'Shuster', '0.412', '', ''],
['House', 'PA', 'R', 'Tom', 'Marino', '0.378', '', ''],
['House', 'PA', 'R', 'Lou', 'Barletta', '0.276', '', ''],
['House', 'PA', 'R', 'Keith', 'Rothfus', '0.488', '', ''],
['House', 'PA', 'D', 'Allyson', 'Schwartz', '-0.336', '', ''],
['House', 'PA', 'D', 'Mike', 'Doyle', '-0.331', 'Michael F.', ''],
['House', 'PA', 'R', 'Charlie', 'Dent', '0.264', 'Charles', ''],
['House', 'PA', 'R', 'Joseph', 'Pitts', '0.577', 'Joe', ''],
['House', 'PA', 'D', 'Matt', 'Cartwright', '-0.463', '', ''],
['House', 'PA', 'R', 'Tim', 'Murphy', '0.263', 'Timothy F.', ''],
['House', 'RI', 'D', 'David', 'Cicilline', '-0.433', '', ''],
['House', 'RI', 'D', 'James', 'Langevin', '-0.371', '', ''],
['House', 'SC', 'R', 'Mark', 'Sanford', '0.881', '', ''],
['House', 'SC', 'R', 'Joe', 'Wilson', '0.584', '', ''],
['House', 'SC', 'R', 'Jeff', 'Duncan', '0.847', '', ''],
['House', 'SC', 'R', 'Trey', 'Gowdy', '0.742', '', ''],
['House', 'SC', 'R', 'Mick', 'Mulvaney', '0.87', '', ''],
['House', 'SC', 'D', 'James', 'Clyburn', '-0.452', 'Jim', ''],
['House', 'SC', 'R', 'Tom', 'Rice', '0.664', '', ''],
['House', 'SD', 'R', 'Kristi', 'Noem', '0.382', '', ''],
['House', 'TN', 'R', 'Phil', 'Roe', '0.507', '', ''],
['House', 'TN', 'R', 'Jimmy', 'Duncan', '0.631', '', ''],
['House', 'TN', 'R', 'Chuck', 'Fleischmann', '0.515', '', ''],
['House', 'TN', 'R', 'Scott', 'DesJarlais', '0.569', '', ''],
['House', 'TN', 'D', 'Jim', 'Cooper', '-0.161', '', ''],
['House', 'TN', 'R', 'Diane', 'Black', '0.601', '', ''],
['House', 'TN', 'R', 'Marsha', 'Blackburn', '0.642', '', ''],
['House', 'TN', 'R', 'Stephen', 'Fincher', '0.57', '', ''],
['House', 'TN', 'D', 'Steve', 'Cohen', '-0.43', '', ''],
['House', 'TX', 'R', 'Louie', 'Gohmert', '0.601', '', ''],
['House', 'TX', 'R', 'Ted', 'Poe', '0.627', '', ''],
['House', 'TX', 'R', 'Sam', 'Johnson', '0.63', '', ''],
['House', 'TX', 'R', 'Ralph Moody', 'Hall', '0.457', 'Ralph', ''],
['House', 'TX', 'R', 'Jeb', 'Hensarling', '0.754', '', ''],
['House', 'TX', 'R', 'Joe Linus', 'Barton', '0.545', 'Joe', ''],
['House', 'TX', 'R', 'John', 'Culberson', '0.529', '', ''],
['House', 'TX', 'R', 'Kevin', 'Brady', '0.542', '', ''],
['House', 'TX', 'D', 'Al', 'Green', '-0.407', '', ''],
['House', 'TX', 'R', 'Michael', 'McCaul', '0.466', '', ''],
['House', 'TX', 'R', 'Mike', 'Conaway', '0.624', 'Michael', ''],
['House', 'TX', 'R', 'Kay', 'Granger', '0.419', '', ''],
['House', 'TX', 'R', 'Mac', 'Thornberry', '0.568', '', ''],
['House', 'TX', 'R', 'Randy', 'Weber', '0.828', '', ''],
['House', 'TX', 'D', 'Ruben', 'Hinojosa', '-0.324', '', ''],
['House', 'TX', 'D', 'Beto', "O'Rourke", '-0.402', '', ''],
['House', 'TX', 'R', 'Bill', 'Flores', '0.624', '', ''],
['House', 'TX', 'D', 'Sheila', 'Jackson Lee', '-0.451', '', ''],
['House', 'TX', 'R', 'Randy', 'Neugebauer', '0.656', '', ''],
['House', 'TX', 'D', 'Joaquin', 'Castro', '-0.403', '', ''],
['House', 'TX', 'R', 'Lamar', 'Smith', '0.426', 'Lamar S.', ''],
['House', 'TX', 'R', 'Pete', 'Olson', '0.56', '', ''],
['House', 'TX', 'D', 'Pete', 'Gallego', '-0.219', '', ''],
['House', 'TX', 'R', 'Kenny', 'Marchant', '0.622', '', ''],
['House', 'TX', 'R', 'Roger', 'Williams', '0.622', '', ''],
['House', 'TX', 'R', 'Michael', 'Burgess', '0.581', 'Michael C.', ''],
['House', 'TX', 'R', 'Blake', 'Farenthold', '0.551', '', ''],
['House', 'TX', 'D', 'Henry', 'Cuellar', '-0.216', '', ''],
['House', 'TX', 'D', 'Gene', 'Green', '-0.32', '', ''],
['House', 'TX', 'D', 'Eddie Bernice', 'Johnson', '-0.484', 'Eddie', ''],
['House', 'TX', 'R', 'John', 'Carter', '0.501', '', ''],
['House', 'TX', 'R', 'Pete', 'Sessions', '0.62', '', ''],
['House', 'TX', 'D', 'Marc', 'Veasey', '-0.401', '', ''],
['House', 'TX', 'D', 'Filemon', 'Vela', '-0.312', '', ''],
['House', 'TX', 'D', 'Lloyd', 'Doggett', '-0.418', '', ''],
['House', 'TX', 'R', 'Steve', 'Stockman', '0.974', '', ''],
['House', 'UT', 'R', 'Rob', 'Bishop', '0.563', '', ''],
['House', 'UT', 'R', 'Chris', 'Stewart', '0.505', '', ''],
['House', 'UT', 'R', 'Jason', 'Chaffetz', '0.719', '', ''],
['House', 'UT', 'D', 'Jim', 'Matheson', '-0.104', '', ''],
['House', 'VA', 'R', 'Robert', 'Wittman', '0.415', 'Rob', ''],
['House', 'VA', 'R', 'Scott', 'Rigell', '0.501', '', ''],
['House', 'VA', 'D', 'Bobby', 'Scott', '-0.456', '', ''],
['House', 'VA', 'R', 'Randy', 'Forbes', '0.426', '', ''],
['House', 'VA', 'R', 'Robert', 'Hurt', '0.61', '', ''],
['House', 'VA', 'R', 'Bob', 'Goodlatte', '0.508', '', ''],
['House', 'VA', 'R', 'Eric', 'Cantor', '0.555', '', ''],
['House', 'VA', 'R', 'Dave', 'Brat', '0.496', 'David', ''],
['House', 'VA', 'D', 'Jerry', 'Moran', '-0.309', 'Jim', ''],
['House', 'VA', 'R', 'Morgan', 'Griffith', '0.558', '', ''],
['House', 'VA', 'R', 'Frank', 'Wolf', '0.287', '', ''],
['House', 'VA', 'D', 'Gerry', 'Connolly', '-0.288', '', ''],
['House', 'VT', 'D', 'Peter', 'Welch', '-0.457', '', ''],
['House', 'WA', 'D', 'Suzan', 'DelBene', '-0.263', '', ''],
['House', 'WA', 'D', 'Rick', 'Larsen', '-0.37', '', ''],
['House', 'WA', 'R', 'Jaime', 'Herrera Beutler', '0.43', '', ''],
['House', 'WA', 'R', 'Doc', 'Hastings', '0.439', '', ''],
['House', 'WA', 'R', 'Cathy', 'McMorris-Rodgers', '0.454', '', 'McMorris'],
['House', 'WA', 'D', 'Derek', 'Kilmer', '-0.282', '', ''],
['House', 'WA', 'D', 'Jim', 'McDermott', '-0.679', '', ''],
['House', 'WA', 'R', 'Dave', 'Reichert', '0.241', '', ''],
['House', 'WA', 'D', 'David Adam', 'Smith', '-0.276', 'Adam', ''],
['House', 'WA', 'D', 'Denny', 'Heck', '-0.337', 'Dennis', ''],
['House', 'WI', 'R', 'Paul', 'Ryan', '0.586', '', ''],
['House', 'WI', 'D', 'Mark', 'Pocan', '-0.698', '', ''],
['House', 'WI', 'D', 'Ron', 'Kind', '-0.27', '', ''],
['House', 'WI', 'D', 'Gwen', 'Moore', '-0.55', '', ''],
['House', 'WI', 'R', 'James', 'Sensenbrenner', '0.672', 'Jim', ''],
['House', 'WI', 'R', 'Tom', 'Petri', '0.383', '', ''],
['House', 'WI', 'R', 'Sean', 'Duffy', '0.549', '', ''],
['House', 'WI', 'R', 'Reid', 'Ribble', '0.693', '', ''],
['House', 'WV', 'R', 'David', 'McKinley', '0.295', '', ''],
['House', 'WV', 'R', 'Shelley Moore', 'Capito', '0.268', 'Shelley', ''],
['House', 'WV', 'D', 'Nick', 'Rahall', '-0.292', '', ''],
['House', 'WY', 'R', 'Cynthia', 'Lummis', '0.703', '', ''],
['President', 'US', 'D', 'Barack', 'Obama', '-0.368', 'President', 'Hussein Obama'],
['Cabinet', 'US', 'D', 'Joe', 'Biden', '-0.259', 'Joseph', 'R. Biden'],
['Cabinet', 'US', 'D', 'Hillary', 'Clinton', '-0.403', 'Hillary Rodham', ''],
['Senate', 'AK', 'R', 'Lisa', 'Murkowski', '0.192', '', ''],
['Senate', 'AK', 'D', 'Mark', 'Begich', '-0.257', '', ''],
['Senate', 'AL', 'R', 'Jeff', 'Sessions', '0.545', '', ''],
['Senate', 'AL', 'R', 'Richard', 'Shelby', '0.428', '', ''],
['Senate', 'AR', 'D', 'Mark', 'Pryor', '-0.201', '', ''],
['Senate', 'AR', 'R', 'John', 'Boozman', '0.415', '', ''],
['Senate', 'AZ', 'R', 'Jeff', 'Flake', '0.958', '', ''],
['Senate', 'AZ', 'R', 'John', 'McCain', '0.378', '', ''],
['Senate', 'CA', 'D', 'Barbara', 'Boxer', '-0.465', '', ''],
['Senate', 'CA', 'D', 'Dianne', 'Feinstein', '-0.279', '', ''],
['Senate', 'CN', 'D', 'Richard', 'Blumenthal', '-0.417', '', ''],
['Senate', 'CN', 'D', 'Chris', 'Murphy', '-0.317', '', ''],
['Senate', 'CO', 'D', 'Mark', 'Udall', '-0.359', '', ''],
['Senate', 'CO', 'D', 'Michael', 'Bennet', '-0.231', '', ''],
['Senate', 'DE', 'D', 'Chris', 'Coons', '-0.314', '', ''],
['Senate', 'DE', 'D', 'Tom', 'Carper', '-0.182', '', ''],
['Senate', 'FL', 'R', 'Marco', 'Rubio', '0.579', '', ''],
['Senate', 'FL', 'D', 'Bill', 'Nelson', '-0.196', '', ''],
['Senate', 'GA', 'R', 'Saxby', 'Chambliss', '0.435', '', ''],
['Senate', 'GA', 'R', 'Johnny', 'Isakson', '0.416', '', ''],
['Senate', 'HI', 'D', 'Mazie', 'Hirono', '-0.511', '', ''],
['Senate', 'HI', 'D', 'Brian', 'Schatz', '-0.477', '', ''],
['Senate', 'IA', 'R', 'Chuck', 'Grassley', '0.343', '', ''],
['Senate', 'IA', 'D', 'Tom', 'Harkin', '-0.372', '', ''],
['Senate', 'ID', 'R', 'Jim', 'Risch', '0.672', '', ''],
['Senate', 'ID', 'R', 'Michael', 'Crapo', '0.501', 'Mike', ''],
['Senate', 'IL', 'D', 'Richard', 'Durbin', '-0.375', 'Dick', ''],
['Senate', 'IL', 'R', 'Mark', 'Kirk', '0.286', '', ''],
['Senate', 'IN', 'R', 'Daniel', 'Coats', '0.37', 'Dan', ''],
['Senate', 'IN', 'D', 'Joe', 'Donnelly', '-0.125', '', ''],
['Senate', 'KS', 'R', 'Jerry', 'Moran', '0.431', '', ''],
['Senate', 'KS', 'R', 'Pat', 'Roberts', '0.419', '', ''],
['Senate', 'KY', 'R', 'Rand', 'Paul', '0.974', '', ''],
['Senate', 'KY', 'R', 'Mitch', 'McConnell', '0.419', '', ''],
['Senate', 'LA', 'R', 'David', 'Vitter', '0.505', '', ''],
['Senate', 'LA', 'D', 'Mary', 'Landrieu', '-0.204', '', ''],
['Senate', 'MA', 'D', 'Elizabeth', 'Warren', '-0.681', '', ''],
['Senate', 'MA', 'D', 'Mo', 'Cowan', '-0.441', '', ''],
['Senate', 'MD', 'D', 'Barbara', 'Mikulski', '-0.385', '', ''],
['Senate', 'MD', 'D', 'Ben', 'Cardin', '-0.337', '', ''],
['Senate', 'ME', 'R', 'Susan', 'Collins', '0.088', '', ''],
['Senate', 'ME', 'I', 'Angus', 'King', '-0.184', '', ''],
['Senate', 'MI', 'D', 'Debbie', 'Stabenow', '-0.335', '', ''],
['Senate', 'MI', 'D', 'Carl', 'Levin', '-0.411', '', ''],
['Senate', 'MN', 'D', 'Amy', 'Klobuchar', '-0.254', '', ''],
['Senate', 'MN', 'D', 'Al', 'Franken', '-0.433', '', ''],
['Senate', 'MO', 'D', 'Claire', 'McCaskill', '-0.164', '', ''],
['Senate', 'MO', 'R', 'Roy', 'Blunt', '0.453', '', ''],
['Senate', 'MS', 'R', 'Thad', 'Cochran', '0.291', '', ''],
['Senate', 'MS', 'R', 'Roger', 'Wicker', '0.388', '', ''],
['Senate', 'MT', 'D', 'Max', 'Baucus', '-0.226', '', ''],
['Senate', 'MT', 'D', 'John', 'Walsh', '-0.228', '', ''],
['Senate', 'MT', 'D', 'Jon', 'Tester', '-0.23', '', ''],
['Senate', 'NC', 'R', 'Richard', 'Burr', '0.469', '', ''],
['Senate', 'NC', 'D', 'Kay', 'Hagan', '-0.213', '', ''],
['Senate', 'ND', 'D', 'Heidi', 'Heitkamp', '-0.209', '', ''],
['Senate', 'ND', 'R', 'John', 'Hoeven', '0.339', '', ''],
['Senate', 'NE', 'R', 'Mike', 'Johanns', '0.405', '', ''],
['Senate', 'NE', 'R', 'Deb', 'Fischer', '0.488', '', ''],
['Senate', 'NH', 'R', 'Kelly', 'Ayotte', '0.368', '', ''],
['Senate', 'NH', 'D', 'Jeanne', 'Shaheen', '-0.294', '', ''],
['Senate', 'NJ', 'D', 'Bob', 'Menendez', '-0.372', '', ''],
['Senate', 'NJ', 'D', 'Frank', 'Lautenberg', '-0.403', '', ''],
['Senate', 'NJ', 'D', 'Cory', 'Booker', '-0.461', '', ''],
['Senate', 'NM', 'D', 'Martin', 'Heinrich', '-0.284', '', ''],
['Senate', 'NM', 'D', 'Tom', 'Udall', '-0.46', '', ''],
['Senate', 'NV', 'R', 'Dean', 'Heller', '0.473', '', ''],
['Senate', 'NV', 'D', 'Harry', 'Reid', '-0.289', '', ''],
['Senate', 'NY', 'D', 'Kirsten', 'Gillibrand', '-0.297', '', ''],
['Senate', 'NY', 'D', 'Charles', 'Schumer', '-0.362', 'Chuck', ''],
['Senate', 'OH', 'D', 'Sherrod', 'Brown', '-0.452', '', ''],
['Senate', 'OH', 'R', 'Rob', 'Portman', '0.388', '', ''],
['Senate', 'OK', 'R', 'James', 'Inhofe', '0.556', 'Jim', ''],
['Senate', 'OK', 'R', 'Tom', 'Coburn', '0.807', '', ''],
['Senate', 'OR', 'D', 'Jeff', 'Merkley', '-0.396', '', ''],
['Senate', 'OR', 'D', 'Ron', 'Wyden', '-0.324', '', ''],
['Senate', 'PA', 'D', 'Bob', 'Casey', '-0.308', '', ''],
['Senate', 'PA', 'R', 'Pat', 'Toomey', '0.656', '', ''],
['Senate', 'RI', 'D', 'Sheldon', 'Whitehouse', '-0.457', '', ''],
['Senate', 'RI', 'D', 'Jack', 'Reed', '-0.401', '', ''],
['Senate', 'SC', 'R', 'Tim', 'Scott', '0.731', '', ''],
['Senate', 'SC', 'R', 'Lindsey', 'Graham', '0.422', '', ''],
['Senate', 'SD', 'R', 'John', 'Thune', '0.416', '', ''],
['Senate', 'SD', 'D', 'Tim', 'Johnson', '-0.261', '', ''],
['Senate', 'TN', 'R', 'Bob', 'Corker', '0.378', '', ''],
['Senate', 'TN', 'R', 'Lamar', 'Alexander', '0.324', '', ''],
['Senate', 'TX', 'R', 'John', 'Cornyn', '0.517', '', ''],
['Senate', 'TX', 'R', 'Ted', 'Cruz', '0.943', '', ''],
['Senate', 'UT', 'R', 'Mike', 'Lee', '0.986', '', ''],
['Senate', 'UT', 'R', 'Orrin', 'Hatch', '0.388', '', ''],
['Senate', 'VA', 'D', 'Tim', 'Kaine', '-0.26', '', ''],
['Senate', 'VA', 'D', 'Mark', 'Warner', '-0.222', '', ''],
['Senate', 'VT', 'I', 'Bernie', 'Sanders', '-0.523', '', ''],
['Senate', 'VT', 'D', 'Patrick', 'Leahy', '-0.386', '', ''],
['Senate', 'WA', 'D', 'Maria', 'Cantwell', '-0.301', '', ''],
['Senate', 'WA', 'D', 'Patty', 'Murray', '-0.357', '', ''],
['Senate', 'WI', 'R', 'Ron', 'Johnson', '0.677', '', ''],
['Senate', 'WI', 'D', 'Tammy', 'Baldwin', '-0.565', '', ''],
['Senate', 'WV', 'D', 'Joe', 'Manchin III', '-0.069', '', 'Manchin'],
['Senate', 'WV', 'D', 'Jay', 'Rockefeller', '-0.334', '', ''],
['Senate', 'WY', 'R', 'Michael', 'Enzi', '0.552', 'Mike', ''],
['Senate', 'WY', 'R', 'John', 'Barrasso', '0.554', '', ''],
['Governor', 'AK', '', 'Bill', 'Walker', '-0.023', '', ''],
['Governor', 'AL', 'R', 'Robert', 'Bentley', '0.733', '', ''],
['Governor', 'AR', 'R', 'Asa', 'Hutchinson', '0.572', '', ''],
['Governor', 'AZ', 'R', 'Doug', 'Ducey', '0.536', '', ''],
['Governor', 'CA', 'D', 'Jerry', 'Brown', '-0.392', '', ''],
['Governor', 'CO', 'D', 'John', 'Hickenlooper', '-0.041', '', ''],
['Governor', 'CT', 'D', 'Dan', 'Malloy', '-0.295', 'Dannel', ''],
['Governor', 'FL', 'R', 'Rick', 'Scott', '0.691', '', ''],
['Governor', 'GA', 'R', 'Nathan', 'Deal', '0.611', '', ''],
['Governor', 'HI', 'D', 'David', 'Ige', '-0.321', '', ''],
['Governor', 'IA', 'R', 'Terry', 'Branstad', '0.511', '', ''],
['Governor', 'ID', 'R', 'Butch', 'Otter', '0.73', '', ''],
['Governor', 'IL', 'R', 'Bruce', 'Rauner', '0.233', '', ''],
['Governor', 'IN', 'R', 'Eric', 'Holcomb', '0.397', '', ''],
['Governor', 'KS', 'R', 'Sam', 'Brownback', '0.446', '', ''],
['Governor', 'KY', 'R', 'Matt', 'Bevin', '0.805', '', ''],
['Governor', 'LA', 'D', 'John Bel', 'Edwards', '-0.229', '', ''],
['Governor', 'MA', 'R', 'Charlie', 'Baker', '0.27', '', ''],
['Governor', 'MD', 'R', 'Larry', 'Hogan', '0.212', '', ''],
['Governor', 'ME', 'R', 'Paul', 'LePage', '0.707', '', ''],
['Governor', 'MI', 'R', 'Rick', 'Snyder', '0.248', '', ''],
['Governor', 'MN', 'D', 'Mark', 'Dayton', '-0.438', '', ''],
['Governor', 'MO', 'R', 'Eric', 'Greitens', '0.381', '', ''],
['Governor', 'MS', 'R', 'Phil', 'Bryant', '0.614', '', ''],
['Governor', 'MT', 'D', 'Steve', 'Bullock', '-0.206', '', ''],
['Governor', 'NC', 'D', 'Roy', 'Cooper', '-0.275', '', ''],
['Governor', 'ND', 'R', 'Doug', 'Burgum', '0.111', '', ''],
['Governor', 'NE', 'R', 'Pete', 'Ricketts', '0.812', '', ''],
['Governor', 'NH', 'R', 'Chris', 'Sununu', '0.491', '', ''],
['Governor', 'NJ', 'R', 'Chris', 'Christie', '0.351', '', ''],
['Governor', 'NM', 'R', 'Susana', 'Martinez', '0.251', '', ''],
['Governor', 'NV', 'R', 'Brian', 'Sandoval', '0.212', '', ''],
['Governor', 'NY', 'D', 'Andrew', 'Cuomo', '-0.308', '', ''],
['Governor', 'OH', 'R', 'John', 'Kasich', '0.313', '', ''],
['Governor', 'OK', 'R', 'Mary', 'Fallin', '0.465', '', ''],
['Governor', 'OR', 'D', 'Kate', 'Brown', '-0.679', '', ''],
['Governor', 'PA', 'D', 'Tom', 'Wolf', '-0.496', '', ''],
['Governor', 'RI', 'D', 'Gina', 'Raimondo', '-0.165', '', ''],
['Governor', 'SD', 'R', 'Dennis', 'Daugaard', '0.406', '', ''],
['Governor', 'TN', 'R', 'Bill', 'Haslam', '0.348', '', ''],
['Governor', 'TX', 'R', 'Greg', 'Abbott', '0.546', '', ''],
['Governor', 'UT', 'R', 'Gary', 'Herbert', '0.322', '', ''],
['Governor', 'VA', 'D', 'Terry', 'McAuliffe', '-0.38', '', ''],
['Governor', 'VT', 'R', 'Phil', 'Scott', '0.156', '', ''],
['Governor', 'WA', 'D', 'Jay', 'Inslee', '-0.331', '', ''],
['Governor', 'WI', 'R', 'Scott', 'Walker', '0.846', '', ''],
['Governor', 'WV', 'D', 'Jim', 'Justice', '0.138', '', ''],
['Governor', 'WY', 'R', 'Matt', 'Mead', '0.702', '', ''],
['House', 'AL', 'R', 'Gary', 'Palmer', '0.903', '', ''],
['House', 'AR', 'R', 'French', 'Hill', '0.303', '', ''],
['House', 'AR', 'R', 'Bruce', 'Westerman', '0.836', '', ''],
['House', 'AZ', 'D', 'Tom', "O'Halleran", '-0.497', '', ''],
['House', 'AZ', 'R', 'Martha', 'McSally', '0.513', '', ''],
['House', 'AZ', 'R', 'Andy', 'Biggs', '0.532', '', ''],
['House', 'AZ', 'D', 'Ruben', 'Gallego', '-0.474', '', ''],
['House', 'CA', 'R', 'Mark', 'DeSaulnier', '-0.399', '', ''],
['House', 'CA', 'D', 'Jimmy', 'Panetta', '-0.359', '', ''],
['House', 'CA', 'D', 'Salud', 'Carbajal', '-0.405', '', ''],
['House', 'CA', 'R', 'Steve', 'Knight', '0.741', '', ''],
['House', 'CA', 'D', 'Pete', 'Aguilar', '-0.351', '', ''],
['House', 'CA', 'D', 'Ted', 'Lieu', '-0.526', '', ''],
['House', 'CA', 'D', 'Norma', 'Torres', '-0.367', '', ''],
['House', 'CA', 'D', 'Nanette', 'Barragan', '-0.435', '', ''],
['House', 'CA', 'R', 'Mimi', 'Walters', '0.806', '', ''],
['House', 'CA', 'D', 'Lou', 'Correa', '-0.259', '', ''],
['House', 'CO', 'R', 'Ken', 'Buck', '0.689', '', ''],
['House', 'FL', 'R', 'Matt', 'Gaetz', '0.931', '', ''],
['House', 'FL', 'R', 'Neal', 'Dunn', '0.838', '', ''],
['House', 'FL', 'R', 'John', 'Rutherford', '0.517', '', ''],
['House', 'FL', 'D', 'Al', 'Lawson', '-0.138', '', ''],
['House', 'FL', 'D', 'Stephanie', 'Murphy', '-0.482', '', ''],
['House', 'FL', 'D', 'Darren', 'Soto', '-0.357', '', ''],
['House', 'FL', 'D', 'Val', 'Demings', '-0.551', '', ''],
['House', 'FL', 'D', 'Charlie', 'Crist', '-0.015', '', ''],
['House', 'FL', 'R', 'Brian', 'Mast', '0.659', '', ''],
['House', 'FL', 'R', 'Francis', 'Rooney', '0.807', '', ''],
['House', 'FL', 'R', 'Carlos', 'Curbelo', '0.608', '', ''],
['House', 'GA', 'R', 'Buddy', 'Carter', '0.679', '', ''],
['House', 'GA', 'R', 'Drew', 'Ferguson', '0.868', '', ''],
['House', 'GA', 'R', 'Jody', 'Hice', '0.882', '', ''],
['House', 'GA', 'R', 'Barry', 'Loudermilk', '0.641', '', ''],
['House', 'GA', 'D', 'Rick', 'Allen', '-0.115', 'Rick W.', ''],
['House', 'IA', 'R', 'Rod', 'Blum', '0.728', '', ''],
['House', 'IA', 'R', 'David', 'Young', '0.56', '', ''],
['House', 'IL', 'D', 'Raja', 'Krishnamoorthi', '-0.21', '', ''],
['House', 'IL', 'R', 'Mike', 'Bost', '0.468', '', ''],
['House', 'IL', 'R', 'Darin', 'LaHood', '0.527', '', ''],
['House', 'IN', 'R', 'Jim', 'Banks', '0.633', '', ''],
['House', 'IN', 'R', 'Trey', 'Hollingsworth', '0.319', '', ''],
['House', 'KS', 'R', 'Roger', 'Marshall', '0.416', '', ''],
['House', 'KY', 'R', 'James', 'Comer', '0.792', '', ''],
['House', 'LA', 'R', 'Clay', 'Higgins', '0.592', '', ''],
['House', 'LA', 'R', 'Mike', 'Johnson', '0.625', '', ''],
['House', 'LA', 'R', 'Ralph', 'Abraham', '0.586', '', ''],
['House', 'LA', 'R', 'Garret', 'Graves', '0.695', '', ''],
['House', 'MA', 'D', 'Seth', 'Moulton', '-0.538', '', ''],
['House', 'MD', 'D', 'Anthony', 'Brown', '-0.172', 'Anthony G.', ''],
['House', 'MD', 'D', 'Jamie', 'Raskin', '-0.513', '', ''],
['House', 'ME', 'R', 'Bruce', 'Poliquin', '0.495', '', ''],
['House', 'MI', 'R', 'Jack', 'Bergman', '0.604', '', ''],
['House', 'MI', 'R', 'John', 'Moolenaar', '0.598', '', ''],
['House', 'MI', 'R', 'Mike', 'Bishop', '0.794', '', ''],
['House', 'MI', 'R', 'Paul', 'Mitchell', '0.513', '', ''],
['House', 'MI', 'R', 'Dave', 'Trott', '0.524', '', ''],
['House', 'MI', 'D', 'Debbie', 'Dingell', '-0.509', '', ''],
['House', 'MI', 'D', 'Brenda', 'Lawrence', '-0.358', '', ''],
['House', 'MN', 'R', 'Jason', 'Lewis', '0.651', '', ''],
['House', 'MN', 'R', 'Tom', 'Emmer', '0.504', '', ''],
['House', 'MS', 'R', 'Trent', 'Kelly', '0.215', '', ''],
['House', 'MT', 'R', 'Ryan', 'Zinke', '0.565', '', ''],
['House', 'NC', 'R', 'Mark', 'Walker', '0.792', '', ''],
['House', 'NC', 'R', 'David', 'Rouzer', '0.754', '', ''],
['House', 'NC', 'R', 'Ted', 'Budd', '0.511', '', ''],
['House', 'NE', 'R', 'Don', 'Bacon', '0.81', '', ''],
['House', 'NH', 'D', 'Ann McLane', 'Kuster', '-0.275', 'Annie', ''],
['House', 'NJ', 'R', 'Tom', 'MacArthur', '0.584', '', ''],
['House', 'NJ', 'D', 'Josh', 'Gottheimer', '-0.389', '', ''],
['House', 'NJ', 'D', 'Bonnie', 'Watson Coleman', '-0.486', '', ''],
['House', 'NV', 'D', 'Jacky', 'Rosen', '-0.318', '', ''],
['House', 'NV', 'D', 'Ruben', 'Kihuen', '-0.652', '', ''],
['House', 'NY', 'R', 'Lee', 'Zeldin', '0.599', '', ''],
['House', 'NY', 'D', 'Tom', 'Suozzi', '-0.258', 'Thomas', ''],
['House', 'NY', 'D', 'Kathleen', 'Rice', '-0.188', '', ''],
['House', 'NY', 'R', 'Dan', 'Donovan', '0.266', '', ''],
['House', 'NY', 'D', 'Adriano', 'Espaillat', '-0.126', '', ''],
['House', 'NY', 'R', 'John', 'Faso', '0.563', '', ''],
['House', 'NY', 'R', 'Elise', 'Stefanik', '0.38', '', ''],
['House', 'NY', 'R', 'Claudia', 'Tenney', '0.574', '', ''],
['House', 'NY', 'D', 'John', 'Katko', '0.484', '', ''],
['House', 'OH', 'R', 'Warren', 'Davidson', '0.567', '', ''],
['House', 'OK', 'R', 'Steve', 'Russell', '0.787', '', ''],
['House', 'PA', 'D', 'Dwight', 'Evans', '-0.385', '', ''],
['House', 'PA', 'R', 'Ryan', 'Costello', '0.267', '', ''],
['House', 'PA', 'R', 'Brian', 'Fitzpatrick', '0.055', '', ''],
['House', 'PA', 'D', 'Brendan', 'Boyle', '-0.366', '', ''],
['House', 'TN', 'R', 'David', 'Kustoff', '0.865', '', ''],
['House', 'TX', 'R', 'John', 'Ratcliffe', '0.757', '', ''],
['House', 'TX', 'D', 'Vicente', 'Gonzalez', '-0.261', '', ''],
['House', 'TX', 'R', 'Jodey', 'Arrington', '0.853', '', ''],
['House', 'TX', 'D', 'Will', 'Hurd', '0.445', '', ''],
['House', 'TX', 'R', 'Brian', 'Babin', '0.923', '', ''],
['House', 'UT', 'R', 'Mia', 'Love', '0.381', '', ''],
['House', 'VA', 'R', 'Scott', 'Taylor', '0.594', '', ''],
['House', 'VA', 'D', 'Donald', 'McEachin', '-0.652', '', ''],
['House', 'VA', 'R', 'Tom', 'Garrett', '0.61', 'Thomas', ''],
['House', 'VA', 'D', 'Don', 'Beyer', '-0.575', '', ''],
['House', 'VA', 'R', 'Barbara', 'Comstock', '0.503', '', ''],
['House', 'WA', 'R', 'Dan', 'Newhouse', '0.614', '', ''],
['House', 'WA', 'D', 'Pramila', 'Jayapal', '-0.564', '', ''],
['House', 'WI', 'R', 'Glenn', 'Grothman', '0.787', '', ''],
['House', 'WI', 'R', 'Mike', 'Gallagher', '0.511', '', ''],
['House', 'WV', 'R', 'Alex', 'Mooney', '0.534', '', ''],
['House', 'WV', 'R', 'Evan', 'Jenkins', '0.304', '', ''],
['President', 'US', 'R', 'Donald', 'Trump', '0.555', 'President', 'J. Trump'],
['Cabinet', 'US', 'R', 'Mike', 'Pence', '0.852', '', ''],
['Cabinet', 'US', 'R', 'Steve', 'Mnuchin', '0.555', 'Steven', ''],
['Cabinet', 'US', 'R', 'Rex', 'Tillerson', '0.555', '', ''],
['Cabinet', 'US', 'R', 'James', 'Mattis', '0.555', 'Jim', ''],
['Cabinet', 'US', 'R', 'Ryan', 'Zinke', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Sonny', 'Perdue', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Wilbur', 'Ross', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Alexander', 'Acosta', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Ben', 'Carson', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Elaine', 'Chao', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Rick', 'Perry', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Betsy', 'DeVos', '0.555', '', ''],
['Cabinet', 'US', 'R', 'David', 'Shulkin', '0.555', '', ''],
['Cabinet', 'US', 'R', 'John', 'Kelly', '0.555', 'John F.', ''],
['Cabinet', 'US', 'R', 'Reince', 'Priebus', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Robert', 'Lighthizer', '0.555', 'Robert Emmet', ''],
['Cabinet', 'US', 'R', 'Nikki', 'Haley', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Scott', 'Pruitt', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Linda', 'McMahon', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Andrew', 'Puzder', '0.555', 'Andy', ''],
['Cabinet', 'US', 'R', 'Sean', 'Spicer', '0.555', '', ''],
['Cabinet', 'US', 'R', 'Michael', 'Flynn', '0.555', 'Mike', 'T. Flynn'],
['Senate', 'AK', 'R', 'Dan', 'Sullivan', '0.71', '', ''],
['Senate', 'CA', 'D', 'Kamala', 'Harris', '-0.399', '', ''],
['Senate', 'GA', 'R', 'David', 'Perdue', '0.709', '', ''],
['Senate', 'IA', 'R', 'Joni', 'Ernst', '0.956', '', ''],
['Senate', 'LA', 'R', 'John', 'Neely Kennedy', '0.109', '', ''],
['Senate', 'NC', 'R', 'Thom', 'Tillis', '0.877', '', ''],
['Senate', 'NE', 'R', 'Ben', 'Sasse', '0.754', '', ''],
['Senate', 'NH', 'D', 'Maggie', 'Hassan', '-0.164', '', ''],
['Senate', 'NV', 'D', 'Catherine', 'Cortez Masto', '-0.534', '', ''],
['Senate', 'SD', 'R', 'Mike', 'Rounds', '0.627', '', ''],
]


function Politician(scores_array){
    /*
    A class for storing the information of a single politician.
    Using a row from the SCORES array of arrays, it creates an object
    storing the same information in a more convenient way.

    Edit this comment later to clarify!
    */
    this.role = scores_array[0];
    this.state = scores_array[1];
    this.party = scores_array[2];
    this.first = scores_array[3];
    this.last = scores_array[4];
    this.score = scores_array[5];
    this.alt_first = scores_array[6];
    this.alt_last = scores_array[7];
};


function get_article(full_text){
    /*
    Takes text from webpage found using .all_text() method.
    Newlines must be replaced with literal "\n" first.

    Returns array of paragraphs representing the text
    in the actual article, without advertisements or links.
    */
    var paragraph_array = full_text.split("\\n")
    paragraph_array = paragraph_array.filter(Boolean) // removes empty lines

    var min_paragraph_length = 125
    var max_consec_short_lines = 3
    var first_full_line = -1
    var last_line = -1
    for (i = 0; i < paragraph_array.length; i++){
        if (paragraph_array[i].length > min_paragraph_length){
            if (first_full_line == -1){
                first_full_line = i
                var consec_short_lines = 0 // start counter of non-article lines at 0
            } else {
                consec_short_lines = 0 // reset counter if necessary
            }
        } else if (first_full_line != -1){
            consec_short_lines += 1
            if (consec_short_lines == max_consec_short_lines){
                last_line = i - max_consec_short_lines
            }
        }
    }
    if (first_full_line == -1){
        return []
    } else if (last_line == -1){
        last_line = paragraph_array.length - 1
    }
    var article_array = paragraph_array.slice(first_full_line, last_line + 1)
    //console.log(article_array)
    return article_array
}


function get_row_with_name(first, last){
    for (i = 0; i < SCORES.length; i++){
        var row = SCORES[i];
        if (row[3] == first || row[6] == first){
            if (row[4] == last || row[7] == last){
                return row;
            }
        }
    }
    // Reaches here only on error
    console.log("Error: Couldn't find politician " + first + " " + last)
    return []
}


function find_politicians_in_article(article_array){
    /*
    Takes an array of paragraphs in an article.

    Returns an array of Politician objects, one for each politician
    mentioned in the article.
    */
    politicians_in_article = [];

    var politicians_seen = new Set();

    // Iterate over all recognized politicians
    for (i = 0; i < SCORES.length; i++){
        var first = SCORES[i][3];
        var last = SCORES[i][4];
        var alt_first = SCORES[i][6];
        var alt_last = SCORES[i][7];

        // List all possible combinations of first & last names
        var combos = [[first, last]];
        if (alt_last){
            combos.push([first, alt_last]);
        }
        if (alt_first){
            combos.push([alt_first, last]);
            if (alt_last){
                combos.push([alt_first, alt_last]);
            }
        }

        // Iterate over all paragraphs in article
        for (j = 0; j < article_array.length; j++){
            var text = article_array[j];
            // Iterate over all possible name combinations for the politician
            for (k = 0; k < combos.length; k++){
                var f = combos[k][0];
                var l = combos[k][1];
                if (is_name_in_string(text, f + " " + l)){
                    // Don't include same politician twice
                    if (!(politicians_seen.has(combos))){
                        politicians_seen.add(combos);
                        var row = get_row_with_name(f, l);
                        var pol = new Politician(row);
                        politicians_in_article.push(pol);
                    }
                }
            }
        }
    }
    return politicians_in_article;
}


function is_name_in_string(paragraph_string, name){
    if (name == ""){
        return false;
    } else {
        var pattern = new RegExp(name);
        var is_in_string = pattern.test(paragraph_string);
        return is_in_string;
    }
}


function get_sentences(article_array){
    var rv = []
    for (i = 0; i < article_array.length; i++){
        var sentences_array = article_array[i].match(/[^\.!\?]+[\.!\?]+/g);
        if (sentences_array == null){
            // No ., !, or ? in paragraph
            sentences_array = [article_array[i]];
        }
        for (j = 0; j < sentences_array.length; j++){
            rv.push(sentences_array[j]);
        // }
        }
    }
    return rv;
};


function get_sentiments(sentences, politicians){
    /*
    Finds the sentiment of each sentence mentioning a known politician.

    Inputs:
        sentences: an array of sentences from get_sentences()
        politicians: an array of Politician objects from
            find_politicians_in_article()

    Returns an array of arrays, where the inner array contains:
        A Politician object,
        Sentence mentioning the politician,
        Sentiment score for that sentence
    */
    rv = []
    for (i = 0; i < sentences.length; i++){
        sentence = sentences[i];
        for (j = 0; j < politicians.length; j++){
            p = politicians[j];
            if (is_name_in_string(sentence, p.last) ||
                is_name_in_string(sentence, p.alt_last)){
                var sent_object = sentiment(sentence);
                var sent_score = sent_object.score;
                rv.push([p, sentence, sent_score]);
            }
        }
    }

    return rv;
}


function calc_bias_score(sentiments){
    /*
    Calculates a bias score based on sentiments.

    Input is the output of get_sentiments(), an array of arrays containing:
        A Politician object,
        Sentence mentioning the politician,
        Sentiment score for that sentence

    Returns a bias score, along with various other statistics
    */
    var observations = sentiments.length;
    var num_bins = 200;
    var bins = [];
    for (i = 0; i < num_bins; i++){
        bins.push(1 / num_bins); // prior is uniform distribution
    };

    var span = 40 + 1; // adjust all bins within (span - 1) of the closest bin
    for (i = 0; i < sentiments.length; i++){
        politician = sentiments[i][0];
        sentence = sentiments[i][1];
        sent = sentiments[i][2];
        sent_factor = sent / 10;

        ideology = politician.score; // scale of -1 (liberal) to 1
        normalized = (parseFloat(ideology) + 1) / 2; // scale of 0 to 1
        closest_bin = Math.floor(normalized * num_bins);
        for (j = closest_bin - span; j <= closest_bin + span; j++){
            if (j >= 0 && j < num_bins){
                dist_factor = 1 - Math.abs(j - closest_bin) / span;
                bins[j] += bins[j] * sent_factor * dist_factor;
            };
        };
    };
    // Find sentences with strongest sentiment scores
    // Taken from here: http://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value
    sentiments.sort(function(a, b) {
        return Math.abs(b[2]) - Math.abs(a[2]);
    });
    var top_five = sentiments.slice(0, 5);

    // Normalize resulting distribution
    var sum = 0;
    for (i = 0; i < num_bins; i++){
        sum += bins[i];
    };
    for (i = 0; i < num_bins; i++){
        bins[i] = bins[i] / sum;
    };

    // Get cumulative distribution and the median in terms of bin #
    var cum_dist = [bins[0]];
    var median = 0;
    for (i = 1; i < num_bins; i++){
        cum_dist.push(cum_dist[i - 1] + bins[i]);
        if (cum_dist[i] <= 0.50){ median = i + 2};
    };

    bias_score = 200 * (median / num_bins) - 100; // range of -100 to 100
    bias_score = Math.round(bias_score);
    return [bias_score, observations, top_five];
}



function isaWord(value){
    /*
    Checks whether the word is an actual English word

    Input:
        value: (str) word to be evaluated

    Output:
        Boolean indicating whether the value is a word or not
    */
    return value.length > 1 && value !=- '';
};


function get_words(sentences){
    /*
    Converts the sentences into an array of individual words

    Input:
        sentences: (array of str) Sentences to extract words from

    Output:
        words: (array of str) array of words from the sentences
    */
    var words = [];
        for (var i = 0; i < sentences.length; i++){
            var split = sentences[i].split(" ");
            for (var j = 0; j < split.length; j++){
                words.push(split[j]);
            };
    };

    //Extra step necessary to make sure the array contains actual words
    words = words.filter(isaWord);

    return words;
};


function readability(score){
    /*
    Given a score, returns a text message indicative of how difficult it
    is to read a certain article

    Input:
        score: (float) Flesh-Kincaid Readability score

    Output:
        text: (str) text letting the user know of the difficulty
    */
    var text = "";

    if (score > 90){text = "5th Grade Reading Level";}
    else if (score <= 90 && score > 80){text = "6th Grade Reading Level";}
    else if (score <= 80 && score > 70){text = "7th Grade Reading Level";}
    else if (score <= 70 && score > 60){text = "9th Grade Reading Level";}
    else if (score <= 60 && score > 50){text = "12th Grade Reading Level";}
    else if (score <= 50 && score > 30){text = "College Reading Level";}
    else if (score <= 30 && score > 0) {text = "Graduate Reading Level";}
    else {text = "Score Undefined";}

    return text;
};

function Flesh_Kincaid(sentences){
    /*
    Given an array of sentences, calculates the Flesh_Kincaid readability
    score and estimates how hard the given article is to read

    Input:
        sentences: (array of str) Sentences from an article

    Output:
        Returns an array of length 2 that has the readability score and
        text indicating how hard it is to read the given article
    */
    var num_sentences = sentences.length;
    var words = get_words(sentences);
    var num_words = words.length;
    var num_syl = 0;

    for (var i = 0; i < words.length; i++){
        var word_syl = syllable(words[i]);
        num_syl += word_syl;
    };

    var score = 206.835 - 1.015 * (num_words / num_sentences) - 84.6 * (num_syl / num_words);
    
    //Making sure the scores are within the acceptable ranges
    if (score > 100){score = 100;}
    else if (score < 0){score = 0;};

    var text = readability(score);

    return [Math.round(score), text];
};


module.exports = GetBias = function (full_text){
    /*
    Put it all together: test for political bias and get Flesch-Kincaid score
    */
    var article_array = get_article(full_text);
    var full_page_array = full_text.split("\\n");
    var full_page_sentences = get_sentences(full_page_array);


    var sentences = get_sentences(article_array);
    var pols_in_article = find_politicians_in_article(article_array);
    var feelings = get_sentiments(sentences, pols_in_article);
    var bias_object = calc_bias_score(feelings);
    // [bias_score, observations, top_five]
    var fk_object = Flesh_Kincaid(full_page_sentences);
    // [fk_score, text]
    return [bias_object, fk_object];
};

// console.log(go(example_huffpo))

},{"sentiment":8,"syllable":10}],13:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[12])(12)
});
