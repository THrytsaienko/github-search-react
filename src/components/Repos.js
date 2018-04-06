import React from 'react';
import Repo from './Repo';

const Repos = (props) => (
	<div className="repos">
		<h2 className="repos__title">Repositories</h2>
		<hr />
		{
			props.repos.map((item, index) => (
				<Repo
					key={item.id}
					count={index+1}
					name={item.name}
					url={item.html_url}
					description={item.description}
					created={item.created_at}
					updated={item.updated_at}
					stars={item.stargazers_count}
					forks={item.forks_count}
					issues={item.open_issues_count}
					language={item.language}
				/>
			))
		}
	</div>
)

export default Repos;