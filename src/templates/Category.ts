const Category = (data:any) => `
<div class="card__main ${data.isTrain ? 'train' : 'game'}">
    <div class="card__main-item">

        <a class="card__main-name" href="#${data.hash}">${data.name}</a>
    </div>
</div>
`;

export default Category;
