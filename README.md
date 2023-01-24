# Innerview
.___                             ____   ____.__               
|   | ____   ____   ___________  \   \ /   /|__| ______  _  __
|   |/    \ /    \_/ __ \_  __ \  \   Y   / |  |/ __ \ \/ \/ /
|   |   |  \   |  \  ___/|  | \/   \     /  |  \  ___/\     / 
|___|___|  /___|  /\___  >__|       \___/   |__|\___  >\/\_/  
         \/     \/     \/                           \/       


A database for codesmith alumni to provide a detailed description of their interviews at different companies. This will allow others to get a feel of the interview process/challenges for different positions/companies, in turn allowing them to better prepare.

A basic sign-in process will allow users to login and access the database, which will immediately load in order of original posting. 


the client uses react hook to select different paths to render, the heirarchy of which is shown below:
(it's hard to format things like this and the interface page is the only complicated one so thats the only one I'm gonna completely show)

                                  Index
                                    V
                                    V
                                   App
                use react router to select a path to render
                                    V
                                    V
'/interface'       '/login'      '/'(frontpage)         '/post'         '/signup'                
V                                   V                                         
V                                   V
feedContainer                     navbar
            V
            V
            useEffect triggers fetch to backend for all posts in db
            A new interview container is created for each post returned
            the data corresponding to each post is passed down in a prop
                                            V
                                            V
                                InterviewContainer (xMany)
                                            V
                                            V
HeaderContainer                                                        bodyContainer
V                                                                            V
V                                                                            V
Job position                                   Five different info fields for each interview
poster name
company name




After login, the primary use of the app sits on the /interface file.
All posts pulled from the db load their own interview container.

protip! State is managed differently when using react router <link> vs useNavigate. 
See the distinction in the documentation below
-https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
-https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4#:~:text=With%20react%2Drouter%2C%20you%20pass,one%20component%20to%20another%20component





Stretch goals:
-Add a field to query the results from the db by location or company name
-clean data upon entry to prevent bad acting and to ensure homogeneity of queriable fields
            ie: nyc, NYC, newyorkcity = > New York City in database
-add patch and delete functionalities.
             patch -> only available to the user who made the post
             delete -> only available to the user who made the post; also available to admin?
- add admin functionality
