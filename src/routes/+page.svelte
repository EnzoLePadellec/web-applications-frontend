<svelte:head>
	<title>Location API</title>
</svelte:head>

<div class="home-page">
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">Web Applications Frontend</h1>
            <p>designed by Enzo LE PADELLEC</p>
        </div>
    </div>

	<div class="container">
        <h5>The frontend is composed of:</h5>
		  <ol>
			<li>One login page (containing a link to the register page)</li>
			<li>One register page</li>
			<li>One “Location” page in which all locations are listed in a paginated array</li>
		</ol>

        <h5>User Stories:</h5>
        <ul>
        <li><b>US1:</b> As a random visitor, I want to be able to register an account or log-in, so I can
            access all features - <b>Achieved</b>
        </li>
        <li><b>US2:</b> As a random visitor, I want to be redirected to the login/register page when I click on
            “location" tab, so that I know I must log-in to see its content - <b>Achieved</b>
        </li>
        <li><b>US3:</b> As a logged-in user, I want to see locations and be able to click on one location to
            open a modal containing details, so that the website is useful - <b>Achieved</b>
        </li>
        <li><b>US4:</b> As an “admin" user, I want to see a “Add Location” button in the location page, so
            that I can create a new location - <b>In Progress</b>
        </li>
        <li><b>US5:</b> As an “admin" user, I want to see a button to edit locations in the array of locations,
            so that I can edit existing locations - <b>In Progress</b>
        </li>
        <li><b>US6:</b> As an “admin" user, I want to see a button to delete locations in the array of
            locations so that I can delete existing locations - <b>Achieved</b>
        </li>
        </ul>
    </div>
</div>