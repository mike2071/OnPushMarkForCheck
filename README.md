# ObservableWithService

##Instructions for Use

You can run this project with "ng serve"

Once the project is running in the browser, open the dev tools to see the console view.

Now click the "Get Data" button, take note of the logs in the console and that the "Current Time:" in the browser is being updated.

The data is emitted every three seconds.

Now you see the time being displayed in both components, open up the child component and uncomment the line in the "@Component" section. 

Now go back and click the "Get Data" button again and note what has happened, because we have enabled "OnPush" our data is no longer being updated in the UI.

We can solve this issue by importing the "ChangeDetectorRef" and marking the area we want Angular to check, this is a very efficient way to handle change detection as it means whole parts of the component tree can be skipped from being checked

Don't forget to study the code. :)
