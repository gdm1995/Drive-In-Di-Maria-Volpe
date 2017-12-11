package Controller;

import javax.servlet.http.HttpServlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import OperazioniDAO.DeleteProdDAO;

/** Utilizzato per eliminare prodotti dal database, gli identificativi dei prodotti sono passati come parametri nella richiesta
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	int i = 0 ;
	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException,ServletException
	{
		// mi prendo gli input passati dall'iterazione json ( solo le chiavi)
		String codice= request.getParameter("codice");
		String colore = request.getParameter("colore");
		String taglia = request.getParameter("taglia");
//		System.out.println(" sto ricevendo i seguenti parametri "+ codice + colore + taglia);
		DeleteProdDAO delete = new DeleteProdDAO();
		try
		{
			delete.doDelete(codice, colore, taglia);
		}catch(SQLException e )
		{
			e.printStackTrace();
			System.out.println("Problema durante l'esecuzione del codice SQL in Delete nel performare DeleteDAO metodo doDelete");
		}
	}
}