import Link from 'next/link'

function Navbar(){
return(
    <div>
        <Link href="/">
          <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</a>
        </Link>
        <Link href="/cart">
          <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Корзина</a>
        </Link>
    </div>
)
}
export default Navbar