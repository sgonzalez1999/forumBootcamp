package seleniumForo.main;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Main {
	
	public WebDriver driver;

    
    @BeforeClass
    void setUpClass() {
    	System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver.exe");
    }

 

    @AfterClass
    void cleanUpClass() {
        System.clearProperty("webdriver.chrome.driver");
    }

 

    @BeforeMethod
    void setUpMethod() {
        driver = new ChromeDriver();
        driver.get("http://localhost:3000");

    }

 

    @AfterMethod
    void cleanUp() {
    	try {
			Thread.sleep(1500);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
        driver.quit();
    }
	
	@Test
	void navigation() {
		
		WebElement element = driver.findElement(By.id("abrirDetalle"));
		element.click();
		element = driver.findElement(By.id("txtarea"));
		element.sendKeys("hola que tal");
		element = driver.findElement(By.id("btnCrearMensaje"));
		element.click();
		element = driver.findElement(By.id("volver"));
		element.click();
		element = driver.findElement(By.id("btnCrear"));
		element.click();
		element = driver.findElement(By.id("inputTitulo"));
		element.sendKeys("Esto es un titulo");
		element = driver.findElement(By.id("tag"));
		element.sendKeys("aclaración");
		element = driver.findElement(By.id("btnCreateThread"));
		element.click();
		
	}
	
	@Test
	void navigationAbrirDetalle() {
		
		WebElement element = driver.findElement(By.id("abrirDetalle"));
		element.click();
		
	}
	
	@Test
	void navigationAbrirDetalleMensaje() {
		
		WebElement element = driver.findElement(By.id("abrirDetalle"));
		element.click();
		element = driver.findElement(By.id("txtarea"));
		element.sendKeys("hola que tal");
		element = driver.findElement(By.id("btnCrearMensaje"));
		element.click();
		
	}
	
	@Test
	void navigationVolver() {
		
		WebElement element = driver.findElement(By.id("abrirDetalle"));
		element.click();
		element = driver.findElement(By.id("volver"));
		element.click();
		
	}
	
	@Test
	void navigationBtnCrear() {
		
		WebElement element = driver.findElement(By.id("btnCrear"));
		element.click();
		element = driver.findElement(By.id("inputTitulo"));
		element.sendKeys("Esto es un titulo");
		element = driver.findElement(By.id("tag"));
		element.click();
		element.sendKeys("aclaración");
		element = driver.findElement(By.id("btnCreateThread"));
		element.click();
		
	}
}
