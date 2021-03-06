"use strict";

var _ora = _interopRequireDefault(require("ora"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

var _get = require("./utils/get");

var _constants = require("./utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var tip = msg => _chalk.default.blue(msg);

var customTemplateSelect = [{
  type: 'checkbox',
  name: 'inputType',
  message: tip('请选择模板'),
  choices: _constants.TEMPLATE_CHOICES,
  validate: answer => {
    if (answer.length === 1) {
      return true;
    } else {
      return warning('只能选择一种输入方式');
    }
  }
}];

var SelectTemplateFn = () => _inquirer.default.prompt(customTemplateSelect);

var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (templateName, projectName) {
    // 项目不存在
    if (!_fs.default.existsSync(projectName)) {
      //命令行交互
      _inquirer.default.prompt([{
        name: 'description',
        message: 'Please enter the project description: '
      }, {
        name: 'author',
        message: 'Please enter the author name: '
      }, {
        name: 'description',
        message: 'Please enter the project description'
      }]).then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* (answer) {
          if (!_constants.ALLOW_TEMPLATES.includes(templateName)) {
            var {
              inputType
            } = yield SelectTemplateFn();
            templateName = inputType;
          } //下载模板 选择模板
          //通过配置文件，获取模板信息


          var loading = (0, _ora.default)('downloading template ...');
          loading.start();
          (0, _get.downloadLocal)(templateName, projectName).then(() => {
            loading.succeed();
            var fileName = "".concat(projectName, "/package.json");

            if (_fs.default.existsSync(fileName)) {
              var data = _fs.default.readFileSync(fileName).toString();

              var json = JSON.parse(data);
              json.name = projectName;
              json.author = answer.author;
              json.description = answer.description; //修改项目文件夹中 package.json 文件

              _fs.default.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');

              console.log(_logSymbols.default.success, _chalk.default.green('Project initialization finished!'));
            }
          }, () => {
            loading.fail();
          });
        });

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());
    } else {
      //项目已经存在
      console.log(_logSymbols.default.error, _chalk.default.red('The project already exists'));
    }
  });

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = init;