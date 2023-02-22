const Category = (data:any) => `
<div class="card__main ${data.isTrain ? 'train' : 'game'}">
<a href="#${data.hash}">
    <div class="card__main-item">

        <a class="card__main-name" href="#${data.hash}">${data.name}</a>
    </div>
</a>
</div>
`;

export default Category;
