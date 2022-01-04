const SidebarLink = ({ text, Icon, active }) => {
    return (
        <div className={`dark:text-[#d9d9d9] flex items-center justify-center xl:justify-start text-lg space-x-3 hoverAnimation ${active && "font-bold"}`}>
            <Icon className="inline-block h-7"/>
            <span className="hidden xl:inline">{text}</span>
        </div>
    )
}

export default SidebarLink
