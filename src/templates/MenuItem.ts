const MenuItem = (data:any) => `
<li class="menu__items-item">
    <a class="menu__items-link" href="#${data.hash}">${data.name}</a>
</li>
`;


export default MenuItem;
