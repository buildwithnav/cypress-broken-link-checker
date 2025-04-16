/// <reference types="cypress" />

describe("Find Broken Links on a web page",()=>{
    it("Find number of total links; Number of broken links; Number of active links; Number of empty links",()=>{
        let activeLinks = 0;
        let brokenLinks = 0;
        let totalLinks = 0;
        let emptyLinks =0;
        cy.visit('https://www.eddymens.com/blog/page-with-broken-pages-for-testing-53049e870421');
        cy.get('a')
        .each(($list,index)=>{
            let href = $list.attr('href')
            
            if(href){
                cy.request({url:'href', failOnStatusCode:false, log: false }).then((response)=>{
                    if(response.status>=400){
                        cy.log(`Link on ${index+1} is broken - ${href}`)
                        brokenLinks++;
                    }
                    else{
                        cy.log(`Link on ${index+1} is active `)
                        activeLinks++;
                    }
                })
            }else{
                emptyLinks++;
            }
            
        })
        .then(($links)=>{
            totalLinks = ($links.length);
            cy.log(`Total Number of Links : ${totalLinks}`);
            cy.log(`Total Broken Links : ${brokenLinks}`)
            cy.log(`Total Active Links : ${activeLinks}`)
            cy.log(`Total Empty Links : ${emptyLinks}`)
        })
            
        })
    })
