//
//  ContentView.swift
//  iosFinal
//
//  Created by Dylan Erdwien on 5/16/24.
//

import SwiftUI
import UIKit


    
    
  
    
    class TeachViewController: UIViewController {
        
        @IBOutlet weak var titleTextField: UITextField!
        @IBOutlet weak var nameTextField: UITextField!
        @IBOutlet weak var timeDatePicker: UIDatePicker!
        
        var selectedDate: Date?
        
        override func viewDidLoad() {
            super.viewDidLoad()
            // Additional configuration if needed
        }
        
        @IBAction func datePickerValueChanged(_ sender: UIDatePicker) {
            selectedDate = sender.date
        }
        
        @IBAction func saveButtonTapped(_ sender: UIButton) {
            guard let title = titleTextField.text, !title.isEmpty,
                  let name = nameTextField.text, !name.isEmpty,
                  let selectedDate = selectedDate else {
                // Show an alert indicating that all fields are required
                return
            }
            
            // Do something with the entered data, e.g., save it to a database
            
            // Reset the text fields and date picker
            titleTextField.text = ""
            nameTextField.text = ""
            timeDatePicker.date = Date()
            //selectedDate =
            
            // Show a success message or navigate to another screen
        }
    }

