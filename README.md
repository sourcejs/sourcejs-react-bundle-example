# SourceJS React Styleguide Bundle Example

Example of pre-configured [SourceJS](http://sourcejs.com) bundle for building React Component Libraries and Style Guides.

Based on latest SourceJS 0.6 nightly builds, and a bunch of plugins:

* [sourcejs-react-styleguidist](http://github.com/sourcejs/sourcejs-react-styleguidist)
* [sourcejs-react-docgen](http://github.com/sourcejs/sourcejs-react-docgen)

Available features:

* Live code editor
* Automatic React Doc generation
* Hot Module Replacement
* Clarify mode for responsive testing
* Advanced navigation support
* SourceJS ecosystem support

[**Live demo**](http://162.219.3.106:8080)

[![image](http://d.pr/i/1ij48+)](http://162.219.3.106:8080/specs/button/)

## Setup

```
npm i && npm start
open http://127.0.0.1:8080
```

To update SourceJS (in case of new installed plugins), run

```
npm run build-source
```

### Writing Documentation

Example components are placed into `./specs` folder. Each component has its JSX/CSS sources, `readme.md` documentation with component examples and text description and `info.json` meta file.

Simple, but extendable syntax allows automatically building rich component presentation pages.

    # Placeholder Spec

    <%- info.__docGenRaw.description %>

    ## Properties

    <%- info.__docGenHTML %>

    ## Basic placeholder

    ```jsx
    <Placeholder type="beard"/>
    ```

Renders into

![image](http://d.pr/i/18Y12+)

---

## License

The MIT License, see the included [license.md](license.md) file.
