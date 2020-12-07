"use strict";var newDB={goods:[{title:"Цветок, который стоит на столе, такой загадочный.",description:"А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя",image:"../images/popular0.jpg",sale:!0,hit:!0,bestPrice:!0,oldPrice:"1 499",newPrice:"799",id:"001"},{title:"Набор юного дизайнера",description:"Посмотрите на него.\nОн покажет всем какой вы классный и творческий. Главное не забыть посидеть на подоконнике с бокаль...",image:"../images/popular1.jpg",sale:!0,hit:!1,bestPrice:!1,oldPrice:"",newPrice:"13 666",id:"002"},{title:"Лампа. Просто лампа.",description:"В паре с загадочным цветком добавит загадочности вашему интерьеру",image:"../images/popular2.jpg",sale:!1,hit:!0,bestPrice:!1,oldPrice:"2 699",newPrice:"1 789",id:"003"},{title:"Классные деревянные минималистичные часы с...",description:"Все в ту же копилку загдочности вашего интерьера и вашей натуры",image:"../images/popular3.jpg",sale:!0,hit:!0,bestPrice:!1,oldPrice:"2 199",newPrice:"1 899",id:"004"}]};
"use strict";function renderCards(e){var n=document.querySelector(".goods__list");console.log(n.parentElement),e.goods.forEach((function(e){var o=document.createElement("div");o.className="goods__list-item",o.setAttribute("data-id",e.id),n?o.innerHTML='\n            <figure class="goods__list-item-img">\n                <img src="'.concat(e.image,'" alt="" style="display: inline">\n                <div \n                    style="').concat(e.sale?"display: flex":"display: none",'" \n                    class="sale">\n                    Акция\n                </div>\n                <div \n                    style="').concat(e.hit?"display: flex;":"display: none","\n                    ").concat(!1===e.sale?"left: 10px;":"",'" \n                    class="hit">\n                    Хит\n                </div>\n                <div \n                    style="').concat(e.bestPrice?"display: flex":"display: none",'" \n                    class="best-price">\n                    Лучшая цена\n                </div>\n            </figure>\n                             \n            <div class="goods__list-item-description">\n                \n                    <h5 class="goods__list-item-description-title">').concat(e.title,'</h5>\n                    <h5 class="goods__list-item-description-text">').concat(e.description,'</h5>\n                \n            \n                \n                <div class="goods__list-item-description-price ">\n                    \n                    <div>\n                        <span \n                        style="').concat(""===e.oldPrice?"display:none":"",'" \n                        class="goods__list-item-description-price-old">\n                            ').concat(e.oldPrice,' ₽ \n                        </span>\n                        <span \n                        style="').concat((e.sale,""),'" class="goods__list-item-description-price-new">\n                            ').concat(e.new?e.newPrice=e.oldPrice:e.newPrice,' ₽ \n                        </span>\n                    \n                    </div>\n                    \n                    <a class="goods__list-item-btn">\n                        <img src="../images/.basket.svg" alt="">\n                    </a>\n                    \n                </div>\n                \n                </div>\n                \n            </div>\n        '):o.style.display="none",n.appendChild(o)}))}renderCards(newDB);var join=document.querySelector(".header__login-auth-btn"),joinMobile=document.querySelector(".header__login-auth-img"),callback=document.querySelector(".footer__calback-btn"),joinClose=document.querySelector(".join-btn-close"),callbackClose=document.querySelector(".callback-btn-close"),accountModal=document.querySelector(".join-wrapper"),callbackModal=document.querySelector(".callback-wrapper");function openJoin(){accountModal.style.display="block",document.body.style.overflow="hidden"}function openCallback(){callbackModal.style.display="block",document.body.style.overflow="hidden"}function closeJoin(){accountModal.style.display="none",document.body.style.overflow=""}function closeCallback(){callbackModal.style.display="none",document.body.style.overflow=""}join.addEventListener("click",openJoin),joinMobile.addEventListener("click",openJoin),callback.addEventListener("click",openCallback),joinClose.addEventListener("click",closeJoin),callbackClose.addEventListener("click",closeCallback);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiLmpzIiwic2NyaXB0cy5qcyJdLCJuYW1lcyI6WyJuZXdEQiIsImdvb2RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwic2FsZSIsImhpdCIsImJlc3RQcmljZSIsIm9sZFByaWNlIiwibmV3UHJpY2UiLCJpZCIsInJlbmRlckNhcmRzIiwiZGF0YSIsImdvb2RzV3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnRFbGVtZW50IiwiZm9yRWFjaCIsImdvb2QiLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImNvbmNhdCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiam9pbiIsImpvaW5Nb2JpbGUiLCJjYWxsYmFjayIsImpvaW5DbG9zZSIsImNhbGxiYWNrQ2xvc2UiLCJhY2NvdW50TW9kYWwiLCJjYWxsYmFja01vZGFsIiwib3BlbkpvaW4iLCJib2R5Iiwib3ZlcmZsb3ciLCJvcGVuQ2FsbGJhY2siLCJjbG9zZUpvaW4iLCJjbG9zZUNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQSxJQUFNQSxNQUFRLENBQ1ZDLE1BQVMsQ0FDTCxDQUNJQyxNQUFTLG9EQUNUQyxZQUFlLHNGQUNmQyxNQUFTLHlCQUNUQyxNQUFRLEVBQ1JDLEtBQU8sRUFDUEMsV0FBYSxFQUNiQyxTQUFZLFFBQ1pDLFNBQVksTUFDWkMsR0FBTSxPQUVWLENBQ0lSLE1BQVMsd0JBQ1RDLFlBQWUsNkhBRWZDLE1BQVMseUJBQ1RDLE1BQVEsRUFDUkMsS0FBTyxFQUNQQyxXQUFhLEVBQ2JDLFNBQVksR0FDWkMsU0FBWSxTQUNaQyxHQUFNLE9BRVYsQ0FDSVIsTUFBUyx1QkFDVEMsWUFBZSxvRUFDZkMsTUFBUyx5QkFDVEMsTUFBUSxFQUNSQyxLQUFPLEVBQ1BDLFdBQWEsRUFDYkMsU0FBWSxRQUNaQyxTQUFZLFFBQ1pDLEdBQU0sT0FFVixDQUNJUixNQUFTLGdEQUNUQyxZQUFlLGtFQUNmQyxNQUFTLHlCQUNUQyxNQUFRLEVBQ1JDLEtBQU8sRUFDUEMsV0FBYSxFQUNiQyxTQUFZLFFBQ1pDLFNBQVksUUFDWkMsR0FBTTtBQzdDbEIsYUFBQSxTQUFTQyxZQUFZQyxHQUNqQixJQUFNQyxFQUFlQyxTQUFTQyxjQUFjLGdCQUM1Q0MsUUFBUUMsSUFBSUosRUFBYUssZUFDekJOLEVBQUtYLE1BQU1rQixTQUFRLFNBQUNDLEdBQ2hCLElBQU1DLEVBQU9QLFNBQVNRLGNBQWMsT0FDcENELEVBQUtFLFVBQVksbUJBQ2pCRixFQUFLRyxhQUFhLFVBQVdKLEVBQUtWLElBSTlCRyxFQUNBUSxFQUFLSSxVQUFMLGtGQUFBQyxPQUVnQk4sRUFBS2hCLE1BRnJCLHlGQUFBc0IsT0FJaUJOLEVBQUtmLEtBQU8sZ0JBQWtCLGdCQUovQyxnSkFBQXFCLE9BU2lCTixFQUFLZCxJQUFNLGlCQUFtQixnQkFUL0MsMEJBQUFvQixRQVV3QixJQUFkTixFQUFLZixLQUFpQixjQUFnQixHQVZoRCw2SUFBQXFCLE9BZWlCTixFQUFLYixVQUFZLGdCQUFrQixnQkFmcEQsNlNBQUFtQixPQXVCeUROLEVBQUtsQixNQXZCOUQsNkVBQUF3QixPQXdCd0ROLEVBQUtqQixZQXhCN0QsZ1BBQUF1QixPQWdDdUMsS0FBbEJOLEVBQUtaLFNBQWtCLGVBQWlCLEdBaEM3RCw2R0FBQWtCLE9Ba0NrQk4sRUFBS1osU0FsQ3ZCLHlHQUFBa0IsUUFxQ3FCTixFQUFLZixLQUFPLElBckNqQyxtRkFBQXFCLE9Bc0NrQk4sRUFBSSxJQUFPQSxFQUFLWCxTQUFXVyxFQUFLWixTQUFXWSxFQUFLWCxTQXRDbEUsMFlBc0RBWSxFQUFLTSxNQUFNQyxRQUFVLE9BR3pCZixFQUFhZ0IsWUFBWVIsTUFJakNWLFlBQVlYLE9BTVosSUFBTThCLEtBQU9oQixTQUFTQyxjQUFjLDJCQUM5QmdCLFdBQWFqQixTQUFTQyxjQUFjLDJCQUVwQ2lCLFNBQVdsQixTQUFTQyxjQUFjLHdCQUVsQ2tCLFVBQVluQixTQUFTQyxjQUFjLG1CQUNuQ21CLGNBQWdCcEIsU0FBU0MsY0FBYyx1QkFHdkNvQixhQUFlckIsU0FBU0MsY0FBYyxpQkFDdENxQixjQUFnQnRCLFNBQVNDLGNBQWMscUJBSTdDLFNBQVNzQixXQUNMRixhQUFhUixNQUFNQyxRQUFVLFFBQzdCZCxTQUFTd0IsS0FBS1gsTUFBTVksU0FBVyxTQUduQyxTQUFTQyxlQUNMSixjQUFjVCxNQUFNQyxRQUFVLFFBQzlCZCxTQUFTd0IsS0FBS1gsTUFBTVksU0FBVyxTQUduQyxTQUFTRSxZQUNMTixhQUFhUixNQUFNQyxRQUFVLE9BQzdCZCxTQUFTd0IsS0FBS1gsTUFBTVksU0FBVyxHQUduQyxTQUFTRyxnQkFDTE4sY0FBY1QsTUFBTUMsUUFBVSxPQUM5QmQsU0FBU3dCLEtBQUtYLE1BQU1ZLFNBQVcsR0FHbkNULEtBQUthLGlCQUFpQixRQUFTTixVQUMvQk4sV0FBV1ksaUJBQWlCLFFBQVNOLFVBQ3JDTCxTQUFTVyxpQkFBaUIsUUFBU0gsY0FDbkNQLFVBQVVVLGlCQUFpQixRQUFTRixXQUNwQ1AsY0FBY1MsaUJBQWlCLFFBQVNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXdEQiA9IHtcclxuICAgIFwiZ29vZHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCm0LLQtdGC0L7Quiwg0LrQvtGC0L7RgNGL0Lkg0YHRgtC+0LjRgiDQvdCwINGB0YLQvtC70LUsINGC0LDQutC+0Lkg0LfQsNCz0LDQtNC+0YfQvdGL0LkuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCLQkCDRgtGD0YIg0L7Qv9C40YHQsNC90LjQtSDRhtCy0LXRgtC60LAsINC/0YDQuNC00LDRjtGJ0LXQtSDQtdC80YMg0LfQsNCz0LDQtNC+0YfQvdC+0YHRgtC4INC4INCy0YvQt9GL0LLQsNGO0YnQtdC1INC40L3RgtC10YDQtdGBINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiLi4vaW1hZ2VzL3BvcHVsYXIwLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInNhbGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJoaXRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiZXN0UHJpY2VcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJvbGRQcmljZVwiOiBcIjEgNDk5XCIsXHJcbiAgICAgICAgICAgIFwibmV3UHJpY2VcIjogXCI3OTlcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjAwMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQndCw0LHQvtGAINGO0L3QvtCz0L4g0LTQuNC30LDQudC90LXRgNCwXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCLQn9C+0YHQvNC+0YLRgNC40YLQtSDQvdCwINC90LXQs9C+LlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwi0J7QvSDQv9C+0LrQsNC20LXRgiDQstGB0LXQvCDQutCw0LrQvtC5INCy0Ysg0LrQu9Cw0YHRgdC90YvQuSDQuCDRgtCy0L7RgNGH0LXRgdC60LjQuS4g0JPQu9Cw0LLQvdC+0LUg0L3QtSDQt9Cw0LHRi9GC0Ywg0L/QvtGB0LjQtNC10YLRjCDQvdCwINC/0L7QtNC+0LrQvtC90L3QuNC60LUg0YEg0LHQvtC60LDQu9GMLi4uXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIuLi9pbWFnZXMvcG9wdWxhcjEuanBnXCIsXHJcbiAgICAgICAgICAgIFwic2FsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImhpdFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiZXN0UHJpY2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwib2xkUHJpY2VcIjogXCJcIixcclxuICAgICAgICAgICAgXCJuZXdQcmljZVwiOiBcIjEzIDY2NlwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiMDAyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCb0LDQvNC/0LAuINCf0YDQvtGB0YLQviDQu9Cw0LzQv9CwLlwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwi0JIg0L/QsNGA0LUg0YEg0LfQsNCz0LDQtNC+0YfQvdGL0Lwg0YbQstC10YLQutC+0Lwg0LTQvtCx0LDQstC40YIg0LfQsNCz0LDQtNC+0YfQvdC+0YHRgtC4INCy0LDRiNC10LzRgyDQuNC90YLQtdGA0YzQtdGA0YNcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi4uL2ltYWdlcy9wb3B1bGFyMi5qcGdcIixcclxuICAgICAgICAgICAgXCJzYWxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImhpdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJlc3RQcmljZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJvbGRQcmljZVwiOiBcIjIgNjk5XCIsXHJcbiAgICAgICAgICAgIFwibmV3UHJpY2VcIjogXCIxIDc4OVwiLFxyXG4gICAgICAgICAgICBcImlkXCI6IFwiMDAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCa0LvQsNGB0YHQvdGL0LUg0LTQtdGA0LXQstGP0L3QvdGL0LUg0LzQuNC90LjQvNCw0LvQuNGB0YLQuNGH0L3Ri9C1INGH0LDRgdGLINGBLi4uXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCLQktGB0LUg0LIg0YLRgyDQttC1INC60L7Qv9C40LvQutGDINC30LDQs9C00L7Rh9C90L7RgdGC0Lgg0LLQsNGI0LXQs9C+INC40L3RgtC10YDRjNC10YDQsCDQuCDQstCw0YjQtdC5INC90LDRgtGD0YDRi1wiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiLi4vaW1hZ2VzL3BvcHVsYXIzLmpwZ1wiLFxyXG4gICAgICAgICAgICBcInNhbGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJoaXRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiZXN0UHJpY2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwib2xkUHJpY2VcIjogXCIyIDE5OVwiLFxyXG4gICAgICAgICAgICBcIm5ld1ByaWNlXCI6IFwiMSA4OTlcIixcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjAwNFwiXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG4iLCJmdW5jdGlvbiByZW5kZXJDYXJkcyhkYXRhKSB7XHJcbiAgICBjb25zdCBnb29kc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX2xpc3QnKTtcclxuICAgIGNvbnNvbGUubG9nKGdvb2RzV3JhcHBlci5wYXJlbnRFbGVtZW50KVxyXG4gICAgZGF0YS5nb29kcy5mb3JFYWNoKChnb29kKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2dvb2RzX19saXN0LWl0ZW0nO1xyXG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZ29vZC5pZCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKGdvb2RzV3JhcHBlcikge1xyXG4gICAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImdvb2RzX19saXN0LWl0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z29vZC5pbWFnZX1cIiBhbHQ9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7Z29vZC5zYWxlID8gJ2Rpc3BsYXk6IGZsZXgnIDogJ2Rpc3BsYXk6IG5vbmUnfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCQ0LrRhtC40Y9cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7Z29vZC5oaXQgPyAnZGlzcGxheTogZmxleDsnIDogJ2Rpc3BsYXk6IG5vbmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICR7Z29vZC5zYWxlID09PSBmYWxzZSA/ICdsZWZ0OiAxMHB4OycgOiAnJ31cIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCl0LjRglxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtnb29kLmJlc3RQcmljZSA/ICdkaXNwbGF5OiBmbGV4JyA6ICdkaXNwbGF5OiBub25lJ31cIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJlc3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICDQm9GD0YfRiNCw0Y8g0YbQtdC90LBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzX19saXN0LWl0ZW0tZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImdvb2RzX19saXN0LWl0ZW0tZGVzY3JpcHRpb24tdGl0bGVcIj4ke2dvb2QudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJnb29kc19fbGlzdC1pdGVtLWRlc2NyaXB0aW9uLXRleHRcIj4ke2dvb2QuZGVzY3JpcHRpb259PC9oNT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzX19saXN0LWl0ZW0tZGVzY3JpcHRpb24tcHJpY2UgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiJHtnb29kLm9sZFByaWNlID09PSAnJyA/ICdkaXNwbGF5Om5vbmUnIDogJyd9XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ29vZHNfX2xpc3QtaXRlbS1kZXNjcmlwdGlvbi1wcmljZS1vbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Z29vZC5vbGRQcmljZX0g4oK9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7Z29vZC5zYWxlID8gJycgOiAnJ31cIiBjbGFzcz1cImdvb2RzX19saXN0LWl0ZW0tZGVzY3JpcHRpb24tcHJpY2UtbmV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2dvb2QubmV3ID8gZ29vZC5uZXdQcmljZSA9IGdvb2Qub2xkUHJpY2UgOiBnb29kLm5ld1ByaWNlfSDigr0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImdvb2RzX19saXN0LWl0ZW0tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzLy5iYXNrZXQuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnb29kc1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxucmVuZGVyQ2FyZHMobmV3REIpXHJcblxyXG5cclxuXHJcbi8vIHBvcHVwXHJcblxyXG5jb25zdCBqb2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9naW4tYXV0aC1idG4nKTtcclxuY29uc3Qgam9pbk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ2luLWF1dGgtaW1nJyk7XHJcblxyXG5jb25zdCBjYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX2NhbGJhY2stYnRuJyk7XHJcblxyXG5jb25zdCBqb2luQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuam9pbi1idG4tY2xvc2UnKTtcclxuY29uc3QgY2FsbGJhY2tDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsYmFjay1idG4tY2xvc2UnKTtcclxuXHJcblxyXG5jb25zdCBhY2NvdW50TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuam9pbi13cmFwcGVyJyk7XHJcbmNvbnN0IGNhbGxiYWNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbGJhY2std3JhcHBlcicpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuSm9pbigpIHtcclxuICAgIGFjY291bnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkNhbGxiYWNrKCkge1xyXG4gICAgY2FsbGJhY2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VKb2luKCkge1xyXG4gICAgYWNjb3VudE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQ2FsbGJhY2soKSB7XHJcbiAgICBjYWxsYmFja01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbn1cclxuXHJcbmpvaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuSm9pbik7XHJcbmpvaW5Nb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuSm9pbik7XHJcbmNhbGxiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNhbGxiYWNrKTtcclxuam9pbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VKb2luKTtcclxuY2FsbGJhY2tDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQ2FsbGJhY2spO1xyXG4iXX0=
