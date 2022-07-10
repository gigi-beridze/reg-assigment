# use-history

the history api as a [react hook](https://reactjs.org/docs/hooks-intro.html)

## usage

```js
import useHistory, {Link} from 'use-history'

const App = () => {
	const {url} = useHistory()

	return <>
		url is {url}
		<Link href='/hello'>go to /hello</Link>
	</>
}
```

it listens to `popstate` events while the component is mounted and rerenders when the url changes. `Link` is a boneless wrapper around `<a>` to update the url directly.

## licence

ISC. &copy; Bren Brightwell