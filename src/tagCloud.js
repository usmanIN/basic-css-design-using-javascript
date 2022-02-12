export const tagCloud = (self,options) => {
    if(!self && !options) return;
    
    if(!options.data) return;

    let data = options.data;

    data.forEach(element => {
        self.append("<span class='tag-badge'> " + element + "</span>");
        self.querySelectorAll(".tag-badge").style.cssText = options.css;
    });
}
