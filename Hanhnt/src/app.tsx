import './App.css';
import { TProduct } from './common/ProductType';
import Footer from './component/Footer';
import Header from './component/Header';
const App: React.FC = () => {
	// const [count, setCount] = useState(0);
	// Get API lay thong tin product
	const product: TProduct = {
		id: 1,
		name: 'Iphone 12',
	};
	type TProps = { product: TProduct; name: string };

	const Shop = (props: TProps) => {
		return (
			<div>
				<p>{props.name}</p>
				<p>{props.product.id}</p>
				<p>{props.product.name}</p>
			</div>
		);
	};
	return (
		<div>
			{/* <div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div> */}

			<Header />
			{/* <Home /> */}
			<Shop product={product} name={'Hoang'} />
			<Footer />
		</div>
	);
};

export default App;
