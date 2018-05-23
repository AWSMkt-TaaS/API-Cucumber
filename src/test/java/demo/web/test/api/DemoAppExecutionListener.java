package demo.web.test.api;

import com.smartbear.readyapi.client.ExecutionListener;
import com.smartbear.readyapi.client.model.ProjectResultReport;

public class DemoAppExecutionListener implements ExecutionListener {

	public void requestSent(ProjectResultReport projectResultReport) {
		System.out.println("Request sent: " + projectResultReport.getProjectName());
	}

	public void executionFinished(ProjectResultReport projectResultReport) {
		System.out.println("Request Finished: " + projectResultReport.getProjectName());
		
	}

	public void errorOccurred(Exception exception) {
		System.out.println("Request sent: " + exception.getMessage());
	}
}