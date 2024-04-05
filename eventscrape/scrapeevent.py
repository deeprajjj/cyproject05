from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import csv 
import time

def scrape(url):
    # opening the url for the first time so that dynamic issue can be resolved 
    driver = webdriver.Chrome()
    driver.get(url)
    # to open url for enough time so that what we need get loaded and from there on we can scrape ...
    try:
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "m-username--link"))
        )
    except Exception as e:
        print(f"Error: {e}")
        driver.quit()
        return []
    
    # now scraping the whole html page after it is dynamically opened before ..
    source_page = driver.page_source

    # bs4 so use there module to esily scrape what ever we need easily now soup has all the html 
    soup = BeautifulSoup(source_page , features = "html.parser")

    # extracting what we need now using bs4 modules on soup instant of bs4
    name = soup.find_all('span', class_="m-username--link")
    rating = soup.find_all('div', class_="jss617 jss622")
    # print(name.text)
    count = 0
    ra=[]
    # print (rating )
    for i in rating :
        count+=1
        if(count%4==0):
        # print(i)
            ra.append(i.text)
    dic={}
    index = 0 
    for i in name:
        print(i.text)
        dic[i.text] = ra[index]
        index+=1
    
    for key in dic :
        print(key +" " + dic[key])

    import csv

    # File path where you want to save the CSV file
    csv_file_path = 'output.csv'

    # Writing data into the CSV file
    with open(csv_file_path, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        
        # Write the header (field names)
        # writer.writerow(['Name', 'Rating'])
        
        # Write the content
        for key, value in dic.items():
            writer.writerow([key])
            writer.writerow([value])




url_to_scrape = "https://www.codechef.com/ratings/all?filterBy=Institution%3DIndian%20Institute%20of%20Information%20Technology%2C%20Kottayam&itemsPerPage=15&order=asc&page=1&sortBy=global_rank"
scraped_names = scrape(url_to_scrape)