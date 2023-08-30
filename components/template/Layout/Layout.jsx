import Head from 'next/head';
import Header from '../../organisms/Header/Header';
import styles from './Layout.module.scss';
import clsx from 'clsx';
import Footer from '@/components/organisms/Footer/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BreadCrumbs from '@/components/molecules/BreadCrumbs/BreadCrumbs';

function Layout({ children }) {
	const router = useRouter();
	const [Path, setPath] = useState([]);
	console.log(Path);

	useEffect(() => {
		const arr = router.asPath.split('/');
		arr[0] = 'Home';
		setPath(arr);
	}, [router]);

	return (
		<>
			<Head>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={clsx(styles.layout)}>
				<Header />
				<section className={clsx(styles.content)}>
					<BreadCrumbs data={Path} />
					{children}
				</section>
				<Footer />
			</main>
		</>
	);
}

export default Layout;
