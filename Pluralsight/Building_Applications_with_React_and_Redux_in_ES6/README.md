# Building Applications with React and Redux in ES6 by Cory House

## Notes

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
                9 Benefits of Stateless Functional Components:<br/><br/>
                <ol>
                    <li>No class Needed</li>
                    <li>Avoid `this` keyword - Simpler, plus avoidance of bind</li>
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
    </tbody>
</table>
