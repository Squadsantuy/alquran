import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-rose-500 p-3 flex justify-between items-center text-rose-50">
      <div>
        <Link href="/" className="text-lg font-bold">
          ISLAMIYAH
        </Link>
      </div>
<div class='button-app' id='app_install_button' style='background: rgb(255, 105, 180); border-radius: 7px; box-sizing: border-box; color: white; padding: 1px 1px; display: inline-flex; align-items: center; font-size: 16px; animation: flash 1.5s infinite;'>
<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkXnI3iefQlNmwo0_ivIiyVnnJ4B8r3Whb7WVHchfW9tTfZob9xTkV9_O-GuprZZoLqQ3gj-9hl3FAw7ly1JtbIjo_b6xvRofvzacMqCzNc3_M99U4iPM3FHiMGUXt0Rqq7HpuY4v-BRVBd0ih3Zb5O-bX-pGPvzzlCMvViqmYaDQ26_n2TjxzS26qg9Lw/s200/AddText_07-17-12.47.01.webp' style='border-radius: 5px; border: 0px; box-sizing: border-box; vertical-align: middle; width: 20px; height: 20px; margin-right: 4px;'/>APP
</div>

<style>
@keyframes flash {
0% {
box-shadow: 0 0 5px rgba(255, 105, 180, 0.8);
}
50% {
box-shadow: 0 0 20px rgba(255, 105, 180, 1), 0 0 30px rgba(255, 105, 180, 0.8);
}
100% {
box-shadow: 0 0 5px rgba(255, 105, 180, 0.8);
}
}
</style>
      <div>{/* <button className="p-3 rounded-full">Dark</button> */}</div>
    </header>
  )
}
