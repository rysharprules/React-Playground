# <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents" target="_blank">Building Applications with React and Redux in ES6 by Cory House</a>

## Notes

- <a href="https://github.com/coryhouse">Cory House on GitHub</a> - see pluralsight-redux-starter and pluralsight-redux-app-used-to-build-script.

### Issues and Solutions
1. On first run we got error:
`babel-node not recognized as internal or external command`
<br />Resolution was to remove the node_modules folder, run npm install and then npm install --only=dev. The missing modules were then added.
1. When running npm run lint we got the error:
`\Pluralsight\Building' is not recognized as an internal or external command`
<br/>The problem is due to the use of spacing in the directory name. The fix was to replace spaces with underscores.

### Atom IDE Setup & Configuration (on Windows)
#### Install
1. Go to <a href="https://atom.io/">https://atom.io/</a>, download and follow the installation instructions
#### Configuration
1. Go to Settings (File > Settings)
1. Go to Install
1. Select Packages
1. Search for and install <a href="https://atom.io/packages/platformio-ide-terminal">platformio-ide-terminal</a>
1. Search for and install <a href="https://atom.io/packages/react">react</a>

### General Notes
<table>
    <thead>
        <tr>
            <th>Chapter</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td valign="top">4. React Component Approaches</td>
            <td>
                <a href="https://github.com/rysharprules/React-Playground/blob/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch04_React_Component_Approaches/HelloWorld_stateless_functional_component">Stateless Functional Component</a> Vs. <a href="https://github.com/rysharprules/React-Playground/blob/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch04_React_Component_Approaches/HelloWorld_class">Class</a><br/>
                9 Benefits of Stateless Functional Components:<br/><br/>
                <ol>
                    <li>No class Needed</li>
                    <li>Avoid <code>this</code> keyword - Simpler, plus avoidance of bind</li>
                    <li>Enforced best practices - No state, so enforced statelessness</li>
                    <li>High signal-to-noise ratio - Less typing</li>
                    <li>Enhanced code completion / intellisense</li>
                    <li>Bloated components are obvious</li>
                    <li>East to understand</li>
                    <li>Easy to test</li>
                    <li>Performance</li>
                </ol>
            </td>
        </tr>
        <tr>
            <td valign="top">4. React Component Approaches</td>
            <td>
                <img src="https://raw.githubusercontent.com/rysharprules/React-Playground/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch06_Intro_to_Redux/reduxFlow.png" />
            </td>
        </tr>
        <tr>
          <td valign="top">4. React Component Approaches</td>
          <td>
            Container (Stateful/Smart/Controller View):<br/><br/>
            <ul>
              <li>Little to no markup</li>
              <li>Pass data and actions down</li>
              <li>Knows about Redux</li>
              <li>Often stateful</li>
            </ul>
            Presentational (Stateless/Dumb/View):<br/><br/>
            <ul>
              <li>Nearly all markup</li>
              <li>Receive data and actions via props</li>
              <li>Doesn't know about Redux</li>
              <li>Typically functional components</li>
            </ul>
          </td>
        </tr>
        <tr>
        <td valign="top">6. Intro to Redux</td>
        <td>
          3 Principles of Redux:<br/><br/>
          <ol>
            <li>Immutable Store</li>
            <li>Actions trigger changes</li>
            <li>Reducers return updated state</li>
          </ol>
        </td>
        </tr>
        <tr>
        <td valign="top">9. Redux Flow</td>
        <td>
          <ul>
            <li>Performing <code>bind(this)</code> in render is a performance issue as a new function is rendered on each render. Best practice is to place binds in constructor.</li>
            <li>In ES6 you can omit the right hand side if they are the same (Short hand properties), e.g.:
            <code>return {type: types.CREATE_COURSE_SUCCESS, course: course};</code> can be simplified to <code>return {type: types.CREATE_COURSE_SUCCESS, course};</code> </li>
            <li>Spread syntax - Used in reducer, e.g. <code>return [...state, Object.assign({}, action.course)];</code> See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">MDN web docs</a> for more information.</li>
            <li>Arrow syntax <code>=></code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN web docs</a> and <a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/">in-depth guide</a> from Mozilla Hacks</li>
            <li><strong>Important:</strong> Redux passes the elements down via props rather than state so this.state.items becomes this.props.items (see <a href="https://github.com/rysharprules/React-Playground/blob/master/Sandbox/Todo%20List/todolist_redux/src/components/TodoList.js">Redux Todo List</a>, line 46). This is mentioned in video 09 (Connect Container).
          </ul>
        </td>
        </tr>
        <tr>
          <td valign="top">11. Async Writes with Redux</td>
            <td>
            A really useful thing to add to WebStorm settings! Templates for creating components. See video 02 (Create Manage Course Page).<br />
              <img src="https://raw.githubusercontent.com/rysharprules/React-Playground/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch11_Async_Writes_with_Redux/webstormTemplates.png" />
            </td>
        </tr>
        <tr>
          <td valign="top">11. Async Writes with Redux</td>
          <td>
            In (Create Form Change Handler) video 09 we are recommended to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"><code>Object.assign()</code></a> rather than assigning the state directly to avoid mutating the state, i.e.: <code>let course = Object.assign({}, this.state.course);</code> rather than <code>let course = this.state.course;</code>
          </td>
        </tr>
    </tbody>
</table>

### Dependencies
#### Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
|jquery|Only used to support toastr|
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-router-redux|Keep React Router in sync with Redux application state|
|redux|Library for unidirectional data flows |
|redux-thunk|Async redux library|
|toastr|Display messages to the user|

#### Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-register|Register Babel to transpile our Mocha tests|
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|colors|Adds color support to terminal |
|compression|Add gzip support to Express|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|expect|Assertion library for use with Mocha|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build | 
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|mocha| JavaScript testing library |
|nock| Mock HTTP requests for testing |
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Warn when Redux state is mutated|
|redux-mock-store|Mock Redux store for testing|
|rimraf|Delete files |
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |
