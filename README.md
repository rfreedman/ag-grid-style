#Ag-Grid Style Override

This project is a playground for customizing the theme for ag-grid.

## Running the Application

This is an Angular 6 application, and must be "run" using it's built-in development server.
It cannot be loaded into a browser from the file system.

To run the project from the command line, use the command <pre>ng serve</pre> from the root of the project
folder, and then open your web browser to http://locahost:4200

Alternatively, you can run the command <pre>ng serve -o</pre> and Angular will open the application
in a new browser tab in your default browser.

## Modifying the Theme
The theme can be modified, and the application will reload automatically.
As described in detail below in the "Set-Up Notes" section, the project is currently
based on the Ag-Grid provided "Balham" theme, but this base theme can be replaced with one of the other
themes provided with Ag-Grid.

The theme is modified by overriding pre-defined scss variables that are referenced in the chosen base theme.
To override the variables, edit the `src/style/ag-grid-override.scss` file.
Variables that can be overridden can be found at 
https://www.ag-grid.com/javascript-grid-styling/#customizing-sass-variables

When the `src/style/ag-grid-override.scss` file is updated and saved, the application will automatically reload.


## Set-Up Notes
The AMT (AUS) project is not set up to make it possible to customize the ag-grid control.

Ag-Grid uses it's own "theme" CSS files, and altering these directly would probably not be a 
good idea, since we would potentially lose those changes when a new version is released.

Therefore, the styles for ag-grid in this project have been installed somewhat differently
from the way they are install in the AUS project. The ag-grid style installation for this project
is based on modifying the ag-grid provided "balham" theme. If desired, a different ag-grid provided theme
can be used as the "base theme".

The override method is loosely based on https://stackoverflow.com/questions/49183522/issues-customizing-the-ag-grid-themes
and consists of the following:

 * The `angular.json` file contains the following 'styles' section:
 <pre>
 "styles": [
     "src/styles.scss",
 ]
 </pre>

 * The `src/style/styles.scss` file includes the following import as it's first line:
   <pre>
   @import "ag-grid-override";
   </pre>
   Addtional lines in this file contain other global styles, unrelated to ag-grid
 
 
 * The `src/style/ag-grid-override.scss` file contains the following: 
    <pre>
    // Variable overrides for customizing ag-grid
    $odd-row-background-color: rgba(34, 139, 34, 0.2);
    
    // Note - currently based on the 'ag-theme-balham' theme.
    // Change all instances of 'ag-theme-balham' below to switch to a different base theme
    $icons-path: "~ag-grid-community/src/styles/ag-theme-balham/icons/";
    @import "~ag-grid-community/src/styles/ag-grid.scss";
    @import "~ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham";
    </pre>
    * The `$odd-row-background-color` variable is an override of the pre-defined ag-grid theme variable of the same name.
      This particular scss variable sets the background color of odd-numbered rows in the grid. Additional theme variable 
      overrides should be placed here.
      
    * The `$icons-path` variable points to the `icons` directory in the base theme's `src` directory.
      This line must preceed the `ag-grid.scss` import
          
    * The final two imports import the ag-grid base scss source and the base theme scss source.
      These imports must remain the last two lines of the file and must be in the order provided.
      
