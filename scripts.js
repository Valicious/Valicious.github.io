const languages = [
    {
        name: "Java",
        cog: "Very well",
        desc: "I have completed an advanced programming course in java in my final year of studying.",
        link: "https://docs.oracle.com/javase/8/docs/api/"
    },
    {
        name: "c#",
        cog: "Fairly well",
        desc: "I started this in the beginning of university and is syntactically the same as Java",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        name: "Delphi",
        cog: "Need to revise",
        desc: "This was the first language i learnt (other than scratch) in school.",
        link: "http://docs.embarcadero.com/products/rad_studio/"
    },
    {
        name: "SQL",
        cog: "Well",
        desc: "I have used sql in many courses and have completed an advanced course in it.",
        link: ""
    },
    {
        name: "Matlab",
        cog: "Fairly well",
        desc: "This was used for my mathematics classes, useful for doing mathematical programming.",
        link: "https://www.mathworks.com/help/matlab/"
    },
    {
        name: "Python",
        cog: "Need to revise",
        desc: "This was used in my attempts to solve Project Euler problems.",
        link: "https://docs.python.org/3/"
    },
    {
        name: "Html, css, JavaScript",
        cog: "Fairly well",
        desc: "I have done a few courses in this and have done paid work with this.",
        link: ""
    },
    {
        name: "ASP.NET",
        cog: "Well",
        desc: "I have done a course in this and i have done my final university project using this. I have also done paid work",
        link: "https://docs.microsoft.com/en-us/aspnet/"
    },
]

function populateLanguages() {
    const cardsdiv = document.getElementById("cardsdiv");
    languages.forEach(elm => {
        var divOuter = document.createElement('div');
        var divInner = document.createElement('div');
        var h5 = document.createElement('h5');
        var h6 = document.createElement('h6');
        var p = document.createElement('p');
        var link = document.createElement('a');

        divOuter.classList.add('card','bck-main');
        divOuter.style.width = '19rem';
        divInner.classList.add('card-body');
        h5.classList.add('card-title', 'color-secondary-2-0');
        h5.innerText = elm.name;
        h6.classList.add('card-subtitle', 'mb-2', 'text-muted')
        h6.innerText = "I know this: " + elm.cog;
        p.classList.add('card-text', 'color-secondary-2-5');
        p.innerText = elm.desc;
        link.classList.add();
        link.href = elm.link;

        divInner.appendChild(h5);
        divInner.appendChild(h6);
        divInner.appendChild(p);
        divInner.appendChild(link);
        divOuter.appendChild(divInner);
        cardsdiv.appendChild(divOuter);
    })
}


















