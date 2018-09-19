# <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents" target="_blank">Building Applications with React and Redux in ES6 by Cory House</a>

## Notes

- <a href="https://github.com/coryhouse">Cory House on GitHub</a> - see pluralsight-redux-starter and pluralsight-redux-app-used-to-build-script.

### Issues and Solutions
1. On first run we got error:
`babel-node not recognized as internal or external command`
<br />Resolution was to remove the node_modules folder, run npm install and then npm install --only=dev. The missing modules were then added.
1. When running npm run lint we got the error:
`\Pluralsight\Building' is not recognized as an internal o r external command`
<br/>The problem is due to the use of spacing in the directory name. The fix was to replace spaces with underscores.

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
                <a href="https://github.com/rysharprules/React-Playground/blob/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch4_React_Component_Approaches/HelloWorld_stateless_functional_component">Stateless Functional Component</a> Vs. <a href="https://github.com/rysharprules/React-Playground/blob/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch4_React_Component_Approaches/HelloWorld_class">Class</a><br/>
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
                <img src="https://raw.githubusercontent.com/rysharprules/React-Playground/master/Pluralsight/Building_Applications_with_React_and_Redux_in_ES6/_ch6_Intro_to_Redux/reduxFlow.png" />
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
          </ul>
        </td>
    </tbody>
</table>
