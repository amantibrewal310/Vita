import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Preloader from './utils/Preloader';
import './css/gridResults.css';
import { API, SERVER } from '../Backend';
import { getCategoryName, getCategoryVideos } from '../request';
import Header from './Header';

function CategoryResults() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [videos, setVideos] = useState([]);
	const [categoryName, setCategoryName] = useState('');
	// videos
	useEffect(() => {
		getCategoryVideos(id)
			.then((res) => {
				setVideos(res);
			})
			.catch((error) => console.log(error));
	}, [id]);

	// category name
	useEffect(() => {
		getCategoryName(id)
			.then((res) => {
				setCategoryName(res);
			})
			.catch((error) => console.log(error));
	});
	return (
		<>
			<Header />
			<div style={{ height: '60px' }}></div>
			<div>
				<div className='resultContainer'>
					<h3>Popular in {categoryName}</h3>
				</div>
				<div className='resultContainer'>
					{videos.length == 0 ? (
						<></>
					) : (
						videos.map((item) => (
							<Link key={item.id} to={`../../preplay/${item.id}`}>
								<div className='resultItem'>
									<img
										src={`${SERVER}${item.thumbnail}`}
										alt='img'
										className='resultThumbnail'
									/>
									<div className='overlay overlayBottom'>
										<div className='resultInfo'>
											<p className='resultTitle'>
												{item.title.length > 32
													? `${item.title.substr(
															0,
															30
													  )}...`
													: item.title}
											</p>
											<p className='resultDescription'>
												{item.description.length > 95
													? `${item.description.substr(
															0,
															95
													  )}...`
													: item.description}
											</p>
										</div>
									</div>
								</div>
							</Link>
						))
					)}
				</div>
			</div>
		</>
	);
}

export default CategoryResults;
